import React from 'react'

const amenities = (props) =>{
  if (props.currentPage !== 4) {
    return null
  }
  return(
    <div>
      <p>Which amenities are available to Hipcampers?</p>
      <label><input type="checkbox" value = "checked" onChange={props.toggleCheck('isTrash')} />Trash Cans</label>
      <label><input type="checkbox" value = "checked" onChange={props.toggleCheck('isKitchen')} />Kitchen</label>
      <label><input type="checkbox" value = "checked" onChange={props.toggleCheck('isShower')} />Showers</label>
      <label><input type="checkbox" value = "checked" onChange={props.toggleCheck('isWifi')} />Wifi</label>
      <label><input type="checkbox" value = "checked" onChange={props.toggleCheck('isPicnicTable')} />Picnic Table</label>
      <label><input type="checkbox" value = "checked" onChange={props.toggleCheck('isToilet')} />Toilet</label>
      <label><input type="checkbox" value = "checked" onChange={props.toggleCheck('isCampfireAllowed')} />Campfires Allowed</label>
      
      <button onClick={props.nextPage}>Next</button>
      <button onClick={props.prevPage}>Previous</button>
   
    </div>
  )
}


export default amenities;