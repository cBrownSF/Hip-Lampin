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
    let minOut = `${year}-${month}-${day+1}`

  const {guestsAllowed,cost,listingId}=props
    this.state={
      check_in: dateToday,
      check_out: '',
      listing_id: listingId,
      guests: guestsAllowed,
      total_price: cost,
      nights:0
    }
    this.dateToday=dateToday
    this.minOut=minOut
    this.maxInDate=maxInDate
    this.maxDate=maxDate
    this.dateSelect=this.dateSelect.bind(this)
    this.submitForm=this.submitForm.bind(this)
    this.calculateTotalPrice=this.calculateTotalPrice.bind(this)
  }
 
  dateSelect(e,field){
    console.log(this.state.check_in)
    e.preventDefault()
    if (field === 'in'){
    return this.setState({
      check_in:e.target.value
    })
  }else{
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
      let updatedInfo = Object.assign({}, this.state, { guest_id: currentUser.id })
      sendResInfo(updatedInfo)
      openModal('confirm')
    }
    else{
    //render Errors here
    }
  }
  calculateTotalPrice(){

    const {check_in,check_out}=this.state
    let diffBetweenDates = new Date(check_in).getTime() - (new Date(check_out).getTime())
    let numberOfDays = Math.abs(diffBetweenDates/ (1000*3600*24));
    
    let finalPrice = this.state.total_price * numberOfDays
    if (check_out.length){
      return this.setState({total_price:finalPrice,nights:numberOfDays})
    }
  }
  render() { 
    const { check_in, check_out,guests,guest_id,listing_id,total_price} = this.state
    let { cost, currentUser,hostId} = this.props
    const costLink = {
      pathname: `/listings/${listing_id}/edit`,
      state: 3,
    }
    return ( 
      // <div className="div-check-in-out">
        <div className='cost-show'>
          {/* <p id="link-location">{isHost(cost)}</p> */}
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
              min={this.dateToday}
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
              min={this.minOut}
              max={this.maxDate}
              onChange={(e)=>this.dateSelect(e,'out')}
            />
          </div>
          </div>)}
        </div>
          <div className='request-div'>
            {currentUser?(
            <div>
            {currentUser.id ===hostId ? (
           <Link to={costLink}> <button
              className='request-to-book'
            >Change the rate</button></Link>
              ):(
            <button 
            className='request-to-book'
            onClick={this.submitForm}
            >Request to Book</button>
            )}
            </div>
            ):(
              <div>
                <button
                  className='request-to-book'
                  onClick={this.submitForm}
                >Log in or Sign Up</button>
              </div>
            )}
          </div>
        </div>
        // </div>
     );
  }
}
 
export default ReservationForm;