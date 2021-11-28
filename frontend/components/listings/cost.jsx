import React from 'react'
import { Link } from "react-router-dom";
const CostForm = (props) => {
  if (props.currentPage !== 3) {
    return null
  }
  return(
    <div classname="costBox">
      {console.log(props)}
        <h1>How much do you want to charge per night?</h1>
        <input 
          type="text"
          placeholder='e.g. 80'
          value={props.cost}
          onChange={props.handleNumInput('cost')}
        />
        <br/>
      <button className='next-button' onClick={props.nextPage}>Next</button>
      <button className='previous-button' onClick={props.prevPage}>Previous</button>

    </div>
  )
}


export default CostForm;
