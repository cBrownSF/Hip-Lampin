import React from "react";
const SiteDetails = (props) => {
  if (props.currentPage !== 5) {
    return null
  }
  return(
    <div>
      
      <h3>Let's go over how Hipcampers will book with you</h3>
      <p>Adjust these settings to determine how Hipcampers will book with you. Feel free to update them at any time.</p>
      
     
      <label>Cancellation Policy
      <select value ={props.cancel} onChange ={props.handleInput('cancellation_policy')}>
        <option value="Super Flexible">Super Flexible</option>
        <option value="Flexible">Flexible</option>
        <option value="Moderate">Moderate</option>
        <option value="Strict">Strict</option>
        <option value="Super Strict(30 Days)">Super Strict(30 Days)</option>
      </select>  
    </label>
    
      <label>Check in Process
      <select value ={props.arrival} onChange ={props.handleInput('on_arrival')}>
        <option value="Meet and Greet">Meet and Greet</option>
        <option value="Go Straight to Camp">Go Straight to Camp</option>
      </select>  
    </label>
      <label>Booking window
      <select value ={props.bookingWindow} onChange ={props.handleInput('booking_time')}>
          <option value="3 months in advance">3 months in advance</option>
          <option value="6 months in advance">6 months in advance</option>
          <option value="9 months in advance">9 months in advance</option>
          <option value="12 months in advance">12 months in advance</option>
          <option value="15 months in advance">15 months in advance</option>
          <option value="18 months in advance">18 months in advance</option>
      </select>  
    </label>
    <label>Check in after
      <select value ={props.checkIn} onChange ={props.handleInput('check_in_time')}>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="01:00 PM">01:00 PM</option>
          <option value="02:00 PM">02:00 PM</option>
          <option value="03:00 PM">03:00 PM</option>
          <option value="04:00 PM">04:00 PM</option>
          <option value="05:00 PM">05:00 PM</option>
          <option value="06:00 PM">06:00 PM</option>
      </select>  
    </label>
      <label>Check out before
        <select value={props.checkOut} onChange={props.handleInput('check_out_time')}>
          <option value="07:00 AM">07:00 AM</option>
          <option value="08:00 AM">08:00 AM</option>
          <option value="09:00 AM">09:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="01:00 PM">01:00 PM</option>
          <option value="02:00 PM">02:00 PM</option>
          <option value="03:00 PM">03:00 PM</option>
        </select>
      </label>
      <label>Minimum Nights Stay
        <select value={props.minNight} onChange={props.handleInput('minimum_night')}>
          <option value="1">1 Night</option>
          <option value="2">2 Nights</option>
          <option value="3">3 Nights</option>
          <option value="4">4 Nights</option>
         
        </select>
      </label>
     
      <button type="submit"
      >Create Listing</button>
      <button className='previous-button' onClick={props.prevPage}>Previous</button>
    </div>
  )
}

export default SiteDetails;