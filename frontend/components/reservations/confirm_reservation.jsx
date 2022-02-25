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
        <div>
          <div>Check in
              <p>{this.formatDate('in')}</p>
          </div>
          <div>Check out
              <p>{this.formatDate('out')}</p>
          </div>
        </div>
        <div>
          <p>Guests</p>
          <div>
          {guests === 1 ? (
            <p id='per-night'> {guests} guest</p>) : (
              <p id='per-night'> guests {guests}</p>
            )
          }
          </div>
          <div>
            Average price * {nights} = ${total_price}
          </div>
          <div>
            Subtotal= ${total_price}
          </div>
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