import React from 'react'
import { Link } from "react-router-dom";
const CheckInForm = (props) => {
  if (props.currentPage !== 10) {
    return null
  }
  return (
    <div className='name-box'>
  
      <br />
      <h1 id='check-det-title'>What are your check in preferences?</h1>
    <label id='booking-title'>Check in process
      <select className="select-bubble-booking" value={props.arrival} onChange={props.handleInput('on_arrival')}>
        <option value="Meet and Greet">Meet and Greet</option>
        <option value="Go Straight to Camp">Go Straight to Camp</option>
      </select>
    </label>
      <label id='booking-title'>Check in after
        <select className="select-bubble-booking" value={props.checkIn} onChange={props.handleInput('check_in_time')}>
          <option value="01:00 PM">01:00 PM</option>
          <option value="02:00 PM">02:00 PM</option>
          <option value="03:00 PM">03:00 PM</option>
          <option value="04:00 PM">04:00 PM</option>
          <option value="05:00 PM">05:00 PM</option>
          <option value="06:00 PM">06:00 PM</option>
        </select>
      </label>
      <label id='booking-title'>Check out before
        <select className="select-bubble-booking" value={props.checkOut} onChange={props.handleInput('check_out_time')}>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="01:00 PM">01:00 PM</option>
          <option value="02:00 PM">02:00 PM</option>
          <option value="03:00 PM">03:00 PM</option>
        </select>
      </label>
      <div className='check-in-button'>
        <button className='previous-button' onClick={props.prevPage}>Previous</button>
        <input className='next-button-with-prev' type="submit"
        />
      </div>
    </div>



  )
}


export default CheckInForm;