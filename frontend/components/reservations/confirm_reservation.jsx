import React from "react";
import { hashHistory } from "react-router";
import { withRouter } from "react-router";
class ConfirmReservation extends React.Component {
  constructor(props) {
    super(props);
    let dets=props.info
    
    this.state={
      listing_id:Number(dets.listing_id),
      total_price:dets.total_price,
      nights:dets.nights,
      total_guests: dets.total_guests,
      check_in:dets.check_in,
      check_out:dets.check_out,
      guest_id:dets.guest_id,
    }
    this.handleSubmit=this.handleSubmit.bind(this)
  }
handleSubmit(e){
const location=this.props.info.location
const reserveId=this.props.info.reserveId
  e.preventDefault()

  if (location && location.pathname.includes('reservations')){
    let updateObject = Object.assign({}, this.state, { id: reserveId })
    this.props.updateReservation(updateObject).then(hashHistory.push(`/profile/${this.state.guest_id}`)).then(() => {
      this.props.closeModal()
    })
  }else{
  this.props.createReservation(this.state).then(hashHistory.push(`/profile/${this.state.guest_id}`)).then(()=>{
    this.props.closeModal()
    })
  }
  // this.props.createReservation(this.state).then(this.props.closeModal);
}
formatDate(field){
  const {check_in,check_out}=this.state
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let d;
  if (field === 'in'){
    d = new Date(check_in)
    let monthName = months[d.getMonth()].slice(0,3)
    let day = d.getDate() + 1
    return `${monthName} ${day} `
  }else{
    d = new Date(check_out)
    let monthName = months[d.getMonth()].slice(0, 3)
    let day = d.getDate() + 1 
    return `${monthName} ${day} `
  }
}
  render() { 
   const {total_guests,nights,total_price}=this.state
    return (
      <div className='sign-up-form-container'>
        <form className='form-confirm' onSubmit={this.handleSubmit}>
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
          {/* {guests === 1 ? (
            <p id='per-night'> {guests} guest</p>) : (
              <p id='per-night'> guests {guests}</p>
            )
          } */}
                <p id='per-night'>{total_guests}</p>
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
          <input
            type="submit"
            className='request-to-book'
            value="Confirm Booking" />
          
        </div>
        </form>
        </div>
    );
  }
}
 
export default withRouter(ConfirmReservation);