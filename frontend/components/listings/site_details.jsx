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
      <select value ={props.cancel} onChange ={props.handleInput}>
        <option value="Super Flexible">Super Flexible</option>
        <option value="Flexible">Flexible</option>
        <option value="Moderate">Moderate</option>
        <option value="Strict">Strict</option>
        <option value="Super Strict(30 Days)">Super Strict(30 Days)</option>
      </select>  
    </label>
    
      <label>Check in Process
      <select value ={props.arrival} onChange ={props.handleInput}>
        <option value="Meet and Greet">Meet and Greet</option>
        <option value="Go Straight to Camp">Go Straight to Camp</option>
      </select>  
    </label>
      <label>Booking window
      <select value ={props.bookingWindow} onChange ={props.handleInput}>
          <option value="3 months in advance">3 months in advance</option>
          <option value="6 months in advance">6 months in advance</option>
          <option value="9 months in advance">9 months in advance</option>
          <option value="12 months in advance">12 months in advance</option>
          <option value="15 months in advance">15 months in advance</option>
          <option value="18 months in advance">18 months in advance</option>
  
      </select>  
    </label>
    
      <h2>Check in Process</h2>

      <h2>Booking Window</h2>
      <h2>Minimum nights stay</h2>
      <h2>Check in after</h2>
      <h2>Check out before</h2>
      <input type="submit" value="Create listing" />
    </div>
  )
}

export default SiteDetails;