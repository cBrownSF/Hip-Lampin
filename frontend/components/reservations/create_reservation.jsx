import React from "react";
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

  const {guestsAllowed,cost,currentUser,listingId}=props
    this.state={
      check_in: dateToday,
      check_out: '',
      listing_id: listingId,
      guest_id: currentUser || null,
      guests: guestsAllowed,
      total_price: 0,
      nights:0
    }
    this.dateSelect=this.dateSelect.bind(this)
    this.dateToday=dateToday
    this.minOut=minOut
    this.maxInDate=maxInDate
    this.maxDate=maxDate
    this.submitForm=this.submitForm.bind(this)
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
      })
    }
  }
  submitForm(){
    if (!this.props.currentUser) {
      this.props.openModal('login')
    }
    //add a modal after submit to confirm Booking
  }
  calculateTotalPrice(){
    const {check_in,check_out}=this.state
    const{cost}=this.props
    let diffBetweenDates = new Date(check_in).getTime() - new Date(check_out).getTime()
    let numberOfDays=diffBetweenDates/ (1000*3600*24)
    let finalPrice = this.state.total_price * numberOfDays
    return this.setState({total_price:finalPrice,nights:numberOfDays})
  }
  render() { 
    const { check_in, check_out,guestsAllowed,guest_id,listing_id,total_price} = this.state
    const { cost} = this.props
    return ( 
      <div>
        <div className='cost-show'>
          {/* <p id="link-location">{isHost(cost)}</p> */}
          <div className='cost-per-night'>
            <span id="price">{`$${cost}`}</span>
          <div>
            {this.props.guestsAllowed ===1 ?(
              <p id='per-night'> {guestsAllowed} guest</p>):(
              <p id='per-night'> {guestsAllowed} guests</p>
            )
            }</div>
          </div>
          <div className='check-in'>
            <button>Check In</button>
            <input 
              type="date"
              value={check_in}
              min={this.dateToday}
              max={this.maxInDate}
              onChange={(e)=>this.dateSelect(e,'in')}
            />
          </div>
          <div className='check-in'>
            <button>Check Out</button>
            <input 
              type="date"
              value={check_out}
              min={this.minOut}
              max={this.maxDate}
              onChange={(e)=>this.dateSelect(e,'out')}
            />
          </div>
          <div className='request-div'>
            <button className='request-to-book'>Request to Book</button>
          </div>
        </div>
        </div>
     );
  }
}
 
export default ReservationForm;