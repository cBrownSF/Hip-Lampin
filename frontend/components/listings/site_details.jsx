import React from "react";
const SiteDetails = (props) => {
  if (props.currentPage !== 6) {
    return null
  }
  return(
    <div className ='name-box'>
      <br/>
      <h1 id='check-det-title'>What are your booking policies?</h1>
      <p id='blurb'>Adjust these settings to determine how Hipcampers will book with you</p>
     <br/>
      <label id='booking-title'>Cancellation Policy
        <select className="select-bubble-booking" value ={props.cancel} onChange ={props.handleInput('cancellation_policy')}>
        <option value="Super Flexible">Super Flexible</option>
        <option value="Flexible">Flexible</option>
        <option value="Moderate">Moderate</option>
        <option value="Strict">Strict</option>
        <option value="Super Strict(30 Days)">Super Strict(30 Days)</option>
      </select>  
    </label>
      <br />
      <br />
     
      <label id='booking-title'>Booking window
        <select className="select-bubble-booking"value ={props.bookingWindow} onChange ={props.handleInput('booking_time')}>
          <option value="3 months in advance">3 months in advance</option>
          <option value="6 months in advance">6 months in advance</option>
          <option value="9 months in advance">9 months in advance</option>
          <option value="12 months in advance">12 months in advance</option>
          <option value="15 months in advance">15 months in advance</option>
          <option value="18 months in advance">18 months in advance</option>
      </select>  
    </label>
      
    
     <div className='booking-detail-button'>
        <button type="button" className='previous-button' onClick={props.prevPage}>Previous</button>
        <button type="button" className='next-button-with-prev' onClick={props.nextPage}>Next</button>
      </div>
    </div>
  )
}

export default SiteDetails;