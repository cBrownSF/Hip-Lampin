import React from 'react'

const amenities = (props) =>{
  if (props.currentPage !== 4) {
    return null
  }
  return(
    <div className="name-box">
      <p id='name-title'>Which amenities are available to Hipcampers?</p>
      <ul id='amenities-list'>
        <li><label><input type="checkbox" value="checked" onChange={props.toggleCheck('is_trash')} />Trash Cans</label></li>
      <li><label><input type="checkbox" value = "checked" onChange={props.toggleCheck('is_kitchen')} />Kitchen</label></li>
      <li><label><input type="checkbox" value = "checked" onChange={props.toggleCheck('is_shower')} />Showers</label></li>
      <li><label><input type="checkbox" value = "checked" onChange={props.toggleCheck('is_wifi')} />Wifi</label></li >
    <li><label><input type="checkbox" value="checked" onChange={props.toggleCheck('is_picnicTable')} />Picnic Table</label></li >
    <li><label><input type="checkbox" value="checked" onChange={props.toggleCheck('is_toilet')} />Toilet</label></li >
    <li><label><input type="checkbox" value="checked" onChange={props.toggleCheck('is_campfire_allowed')} />Campfires Allowed</label></li >
      </ul>
      <div className= 'amenities-button'>
      <button className='previous-button' onClick={props.prevPage}>Previous</button>
      <button className='next-button-with-prev' onClick={props.nextPage}>Next</button>
      </div>
    </div>
  )
}


export default amenities;