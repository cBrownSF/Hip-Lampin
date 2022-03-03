import React from "react";
import ReservationForm from "./create_reservation";
class ReservationShow extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    const res=props.reservation
    console.log(res.listing_id)
    this.state={
      listing_id: res.listing_id,
      total_price: res.total_price,
      nights: res.nights,
      total_guests: res.total_guests,
      check_in: res.check_in,
      check_out: res.check_out,
      guest_id: res.guest_id,
      id:res.id
    }
  
  }
 componentDidMount(){
   if (this.props.formatDate) {
     const { checkIn, checkOut} = this.props.formatDate
     localStorage.setItem('checkIn', checkIn)
     localStorage.setItem('checkOut', checkOut)
   }
  //  this.props.receiveReservation(this.props.match.params.reserveId)
 }
 
  render() { 

    const{reservation,formatDate}=this.props
    const {listing}=this.props.reservation.listing
    console.log(this.props.reservation.check_in)
    console.log(this.props.reservation.check_out)
    debugger;
    return (
      <div className='reservation-show'>
      <div className='reservation-form'>
        <p> Your existing reservation at {reservation.listing.name} in {reservation.listing.city},{reservation.listing.state}</p>
        <div>
          Details
          <p>Nights:{reservation.nights}</p>
          <p>Check in:{formatDate && formatDate.checkIn || localStorage.getItem('checkIn')}</p>
          <p>Check out:{formatDate && formatDate.checkOut || localStorage.getItem('checkOut')}</p>
          <p>Cost per night:{reservation.cost}</p>
          <p>total Cost:{reservation.total_cost}</p>
        </div>
        <div>
          Delete
        </div>
          <div>
            Edit?
          </div>
          <div>
            {/* {console.log(listing)}
            {console.log(reservation)} */}
          {console.log(reservation.listing.guests_allowed)}
          <ReservationForm
            content='Update Your Booking'
            formType='edit'
            cost={reservation.total_price}
            guestsAllowed={reservation.listing.guests_allowed}
            currentUser={this.props.currentUser}
            listingId={reservation.listing.id}
            openModal={this.props.openModal}
            sendResInfo={this.props.sendReservation}
            hostId={reservation.listing.host_id}
            minNight={reservation.listing.minimum_night}
            checkInDate={reservation.check_in}
            checkOutDate={reservation.check_out}
          />
          </div>
       
      </div>
      </div>
    )
  }
}
 
export default ReservationShow;