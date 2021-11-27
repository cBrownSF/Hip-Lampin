import React from 'react'
import { Link } from "react-router-dom";
const CostForm = (props) => {
  if (props.currentStep !== 3) {
    return null
  }
  return(
    <div>
      
        <h1>How much do you want to charge per night?</h1>
        <input 
          type="text"
          placeholder='e.g. $80'
          value={props.cost}
          onChange={props.handleInput('cost')}
        />
      <button onClick={props.nextPage}>Next</button>
      <button onClick={props.prevPage}>Previous</button>

    </div>
  )
}


export default CostForm;
