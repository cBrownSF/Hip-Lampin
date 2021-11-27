import React from 'react'

const amenities = (props) =>{
  if (props.currentPage !== 4) {
    return null
  }
  return(
    <div>
      <label><input type="checkbox" value = "checked" onChange={props.toggleCheck('isTrash')} />TOGGLE</label>
      {console.log(props.isTrash)}
    </div>
  )
}


export default amenities;