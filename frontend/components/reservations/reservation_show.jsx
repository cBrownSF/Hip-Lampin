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
    console.log(reservation)
    return (
      <div className='reservation-show'>
      <div className='reservation-form'>
        <div>
            <p className='title-res-show'>Booking Details</p>
          </div>
          <div>
            <span className='res-show-name'>{reservation.listing.name} in {reservation.listing.city},{reservation.listing.state}</span>
          </div>
        <div className="details-div">
            <span className='details-info'><span className='bolded-nights'>Nights:</span>{reservation.nights}</span>
            <span className='details-info'><span className='bolded-nights'>Check in:</span>{formatDate && formatDate.checkIn || localStorage.getItem('checkIn')}</span>
            <span className='details-info'><span className='bolded-nights'>Check out:</span>{formatDate && formatDate.checkOut || localStorage.getItem('checkOut')}</span>
            <span className='details-info'><span className='bolded-nights'>Cost per night:</span>${reservation.listing.cost}</span>
            <span className='details-info'><span className='bolded-nights'>total Cost:</span>${reservation.total_price}</span>
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
            cost={reservation.listing.cost}
            guestsAllowed={reservation.listing.guests_allowed}
            currentUser={this.props.currentUser}
            listingId={reservation.listing.id}
            openModal={this.props.openModal}
            sendResInfo={this.props.sendReservation}
            hostId={reservation.listing.host_id}
            minNight={reservation.listing.minimum_night}
            nights={reservation.nights}
            checkInDate={reservation.check_in}
            checkOutDate={reservation.check_out}
            location={this.props.location}
            reserveId={this.props.match.params.reserveId}
          />
          </div>
       
      </div>
      </div>
    )
  }
}
 
export default ReservationShow;