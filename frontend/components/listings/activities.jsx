import React from 'react'

const Activities = (props) => {
  if (props.currentPage !== 5) {
    return null
  }
  return (
    <div className="name-box">
      <p id='act-amen-title'>What activities are accessible on or near your property?</p>
      <ul id='amenities-list'>
        <li><label><input type="checkbox" value="checked" onChange={props.toggleCheck('is_fishing')} />Fishing</label></li>
        <li><label><input type="checkbox" value="checked" onChange={props.toggleCheck('is_paddling')} />Paddling</label></li>
        <li><label><input type="checkbox" value="checked" onChange={props.toggleCheck('is_wildlife')} />Wildlife</label></li>
        <li><label><input type="checkbox" value="checked" onChange={props.toggleCheck('is_swimming')} />Swimming</label></li >
        <li><label><input type="checkbox" value="checked" onChange={props.toggleCheck('is_hiking')} />Hiking</label></li >
      </ul>
      <div className='activities-button'>
        <button className='previous-button' onClick={props.prevPage}>Previous</button>
        <button className='next-button-with-prev' onClick={props.nextPage}>Next</button>
      </div>
    </div>
  )
}


export default Activities;