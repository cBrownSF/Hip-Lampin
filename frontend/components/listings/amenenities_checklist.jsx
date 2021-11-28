import React from 'react'

const amenities = (props) =>{
  if (props.currentPage !== 4) {
    return null
  }
  return(
    <div>
      <p>Which amenities are available to Hipcampers?</p>
      <label><input type="checkbox" value = "checked" onChange={props.toggleCheck('is_trash')} />Trash Cans</label>
      <label><input type="checkbox" value = "checked" onChange={props.toggleCheck('is_kitchen')} />Kitchen</label>
      <label><input type="checkbox" value = "checked" onChange={props.toggleCheck('is_shower')} />Showers</label>
      <label><input type="checkbox" value = "checked" onChange={props.toggleCheck('is_wifi')} />Wifi</label>
      <label><input type="checkbox" value = "checked" onChange={props.toggleCheck('is_picnicTable')} />Picnic Table</label>
      <label><input type="checkbox" value = "checked" onChange={props.toggleCheck('is_toilet')} />Toilet</label>
      <label><input type="checkbox" value = "checked" onChange={props.toggleCheck('is_campfire_allowed')} />Campfires Allowed</label>
      
      <button onClick={props.nextPage}>Next</button>
      <button onClick={props.prevPage}>Previous</button>
   
    </div>
  )
}


export default amenities;