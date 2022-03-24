import React from "react";
import ReservationForm from "./create_reservation";
import { hashHistory } from "react-router";
class ReservationShow extends React.Component {
  constructor(props) {
    super(props);
    const res=props.reservation
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
    this.handleDelete=this.handleDelete.bind(this)
  }
  handleDelete(e){
    const {deleteReservation,currentUser}=this.props
    e.preventDefault()
    deleteReservation(this.state.id).then(()=>{
      hashHistory.push(`/profile/${currentUser.id}`)
    })
  }
 componentDidMount(){
   if (this.props.formatDate) {
     const { checkIn, checkOut} = this.props.formatDate
     localStorage.setItem('checkIn', checkIn)
     localStorage.setItem('checkOut', checkOut)
   }
 }
 
  render() { 

    const{reservation,formatDate}=this.props
    return (
      <div className='reservation-show'>
      <div className='reservation-form'>
        <div>
          <button className="delete-button-res-show" onClick={this.handleDelete}>Cancel Reservation</button>
            <p className='title-res-show'>{reservation.listing.name}</p>
          </div>
          <div className='res-show-photos-div'>
            <div className="photo-container">
              <img className="res-show-images" src={reservation.photos[0]} width="400" height='200' alt="coverphoto" />
            </div>
          </div>
          <div className='res-name-div'>
            <span>{reservation.listing.city},{reservation.listing.state}</span>
          </div>
          <div className='res-form-and-dets'>
        <div className="details-div">
            <span className='details-info'><span className='bolded-nights'>Nights:</span>{reservation.nights}</span>
            <span className='details-info'><span className='bolded-nights'>Check in:</span>{formatDate && formatDate.checkIn || localStorage.getItem('checkIn')}</span>
            <span className='details-info'><span className='bolded-nights'>Check out:</span>{formatDate && formatDate.checkOut || localStorage.getItem('checkOut')}</span>
            <span className='details-info'><span className='bolded-nights'>Cost per night:</span>${reservation.listing.cost}</span>
            <span className='details-info'><span className='bolded-nights'>Total Cost:</span>${reservation.total_price}</span>
            <span className='details-info'><span className='bolded-nights'>Guests:</span>{reservation.total_guests}</span>
            <span className='details-info'><span className='bolded-nights'>Add link</span>Show page</span>
        </div>
          <div>
          
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
      </div>
    )
  }
}
 
export default ReservationShow;