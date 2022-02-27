import React from "react";

class ConfirmReservation extends React.Component {
  constructor(props) {
    super(props);
    this.state={...props.info}
    debugger;
    this.handleSubmit=this.handleSubmit.bind(this)
  }
handleSubmit(e){
  e.preventDefault()
}
formatDate(field){
  const {check_in,check_out}=this.state
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let d;
  if (field === 'in'){
    d = new Date(check_in)
    let monthName = months[d.getMonth()].slice(0,3)
    let day = d.getDate()
    return `${monthName} ${day} `
  }else{
    d = new Date(check_out)
    let monthName = months[d.getMonth()].slice(0, 3)
    let day = d.getDate()
    return `${monthName} ${day} `
  }
}
  render() { 
   const {guests,nights,total_price}=this.state
    return (
      <div className='sign-up-form-container'>
        <form onSubmit={this.handleSubmit}></form>
        <div className='reservation-dets-confirm'>
          <p>Reservation Details</p>
        </div>
        <div className='confirm-price-div'>
          <div className="sub-total-div">
            <p className='total-price-confirm'>Check in</p>
            <p className='total-price-confirm'>{this.formatDate('in')}</p>
          </div>
          <div className="sub-total-div">
            <p className='total-price-confirm'>Check out</p>
            <p className='total-price-confirm'>{this.formatDate('out')}</p>
          </div>
     
        <div className="sub-total-div">
          <p>Guests</p>
          <div>
          {guests === 1 ? (
            <p id='per-night'> {guests} guest</p>) : (
              <p id='per-night'> guests {guests}</p>
            )
          }
          </div>
          </div>
          </div>
          <div className='confirm-price-div-line'>
          <div className="sub-total-div">
            <p className='total-price-confirm'> Average price * {nights}</p>
            <p className="total-price-confirm"> ${total_price}</p>
          </div>
          <div className="sub-total-div">
            <p className='sub-total-word'> Subtotal</p>
            <p className="total-price-confirm"> ${total_price}</p>
          </div>
        </div>
        <div className='confirm-button-div'>
          <button
            type="submit"
            className='request-to-book'
            onClick={this.submitForm}
          >Confirm Booking</button>
        </div>
        </div>
    );
  }
}
 
export default ConfirmReservation;