import React from 'react'
import { Link } from "react-router-dom";
const CostForm = (props) => {
  
  if (props.currentPage !== 3) {
    return null
  }

  return(
    <div className="name-box">      
      <br/>
      <h1 id='name-title'>What are your pricing preferences?</h1>
        <div>
        <h1 id='booking-title'>How much do you want to charge per night?</h1>
        <input className = "text-bubble-cost"
          type="text"
          placeholder='e.g. 80'
          value={props.cost}
          onChange={props.handleNumInput('cost')}
          onKeyDown={props.keyPress}
        />
      <p id='required'>This is a required field</p>
      </div>
     <label id='booking-title'>Minimum nights stay
        <select className = "select-bubble-booking" value={props.minNight} onChange={props.handleInput('minimum_night')}>
          <option value="1">1 Night</option>
          <option value="2">2 Nights</option>
          <option value="3">3 Nights</option>
          <option value="4">4 Nights</option>
        </select>
      </label>
        <label id='booking-title'>Maximum guests per night
        <select className="select-bubble-booking" value={props.maxGuest} onChange={props.handleInput('guests_allowed')}>
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
        </select>
      </label>


        <div className='cost-buttons'>
        <button type="button" className='previous-button' onClick={props.prevPage}>Previous</button>
        <button type="button"className='next-button-with-prev' onClick={props.nextPage}>Next</button>
    </div>
    </div>
  )
}


export default CostForm;
