import React from "react";
import { Link } from "react-router-dom";
class ReservationForm extends React.Component {
  
  constructor(props) {
    super(props);
    let d =new Date()
    let year= d.getFullYear();
    let day = d.getDate()
    let month = d.getMonth()+1;
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    let dateToday = `${year}-${month}-${day}`
    let maxInDate = `${year}-12-30`
    let maxDate = `${year}-12-31`
    let minOut = `${year}-${month}-${day+props.minNight}`

  const {guestsAllowed,cost,listingId,formType,nights,checkInDate,checkOutDate}=props
 
    this.state={
      check_in: formType==='edit' ? checkInDate: dateToday,
      check_out: formType === 'edit' ? checkOutDate: '',
      listing_id: listingId,
      guests: guestsAllowed,
      total_price: cost,
      nights: formType === 'edit' ? nights:0,
      total_guests: guestsAllowed === 1 ? `${guestsAllowed} guest` : `${guestsAllowed} guests`
    }
    this.dateToday=dateToday
    this.minOut=minOut
    this.maxInDate=maxInDate
    this.maxDate=maxDate
    this.dateSelect=this.dateSelect.bind(this)
    this.submitForm=this.submitForm.bind(this)
    this.calculateTotalPrice=this.calculateTotalPrice.bind(this)
    this.handleInput=this.handleInput.bind(this)
  }
 
  dateSelect(e,field){
    const {check_in,check_out}=this.state
   
    e.preventDefault()
    if (field === 'in' && !check_out.length){
      return this.setState({
        check_in:e.target.value
      })
    } else if (field === 'in' && check_out.length){
      return this.setState({
        check_in: e.target.value
      }, () => {
        this.calculateTotalPrice()
      })
    }
  else{
      return this.setState({
        check_out: e.target.value
      }, () => {
        this.calculateTotalPrice()
      })
    }
  }
  
  submitForm(e){
    let {currentUser,sendResInfo,openModal} = this.props
    e.preventDefault()
    if (!currentUser) {
      this.props.openModal('login')
    }else if(this.state.check_out.length){
      let updatedInfo = Object.assign({}, this.state, { guest_id: currentUser.id },{location:this.props.location},{reserveId:this.props.reserveId})
      sendResInfo(updatedInfo)
      openModal('confirm')
    }
  }
  calculateTotalPrice(){

    const {check_in,check_out}=this.state
    let diffBetweenDates = new Date(check_in).getTime() - (new Date(check_out).getTime())
    let numberOfDays = Math.abs(diffBetweenDates/ (1000*3600*24));
    
    let finalPrice = this.props.cost * numberOfDays
    if (check_out.length){
      return this.setState({total_price:finalPrice,nights:numberOfDays})
    }
  }
  handleInput(type) {
    return e => {
      this.setState({ [type]: e.currentTarget.value })
    }
  }
  renderGuestList(){
    const {guests,total_guests}=this.state
    let totalGuest=[]
      for (let i=1; i<=guests;i++){
        totalGuest.push(i)
      }
    return (
      <select className="list-guest" value={total_guests} onChange={this.handleInput('total_guests')}>
        {totalGuest.map((number, i) => (
          <option key={`guest-${i}`}>{i ===0 ?`${number} guest`:`${number} guests`}</option>
        ))}
      </select>
    );
  }
  renderErrors() {
    return (
      <ul className="list-name">
        {this.props.errors.map((error, i) => (
          <li className='errors' key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }
  render() { 
    const { check_in, check_out,guests,guest_id,listing_id,total_price} = this.state
    let { cost, formType,currentUser,hostId,content} = this.props
    const costLink = {
      pathname: `/listings/${listing_id}/edit`,
      state: 3,
    }
    return ( 

        <div className='cost-show'>
          <div className='cost-per-night'>
            <span id="price">{`$${cost}`}</span>
          <div>
            {guests ===1 ?(
              <p id='per-night'> per night({guests} guest)</p>):(
              <p id='per-night'> per night({guests} guests)</p>
            )
            }</div>
          </div>
          <div>
            {currentUser && currentUser.id === hostId ?(
              <div></div>
            ):(
          <div className="div-check-in-out">
          <div className='check-in'>
            <p className="check-word">Check In</p>
            <input 
              className='calendar'
              type="date"
              value={check_in}
              min={check_in}
              max={this.maxInDate}
              onChange={(e)=>this.dateSelect(e,'in')}
            />
          </div>
          <div className='check-out'>
            <p className="check-word">Check Out</p>
            <input 
              className='calendar'
              type="date"
              value={check_out}
              min={check_in}
              max={this.maxDate}
              onChange={(e)=>this.dateSelect(e,'out')}
            />
          </div>
          </div>)}
        </div>
        <div>
          {currentUser && currentUser.id === hostId ? <div className='own-listing'>You cannot check in or out to your own Listing :)</div>:(
          <div className='guest-div'>
            <p className="check-word">Guests</p>
            <p className='guest-select-div'>{this.renderGuestList()}</p>
          </div>
              )}
        </div>
          <div className='request-div'>
            {currentUser?(
            <div className="booking-button">
            {currentUser.id ===hostId ? (
           <Link to={costLink}> <button
              className='request-to-book'
            >Change the rate</button></Link>
              ):(
            <button 
            className='request-to-book'
            onClick={this.submitForm}
            >{content}</button>
            )}
            </div>
            ):(
              <div className="booking-button">
                <button
                  className='request-to-book'
                  onClick={this.submitForm}
                >Log in or Sign Up</button>
              </div>

            )}
          </div>
        </div>
     );
  }
}
 
export default ReservationForm;