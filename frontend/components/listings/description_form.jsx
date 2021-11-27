import React from 'react'
import { Link } from "react-router-dom";
const Description = (props) => {
if (props.currentStep !== 2){
  return null
}
    return(
      <div>
     
          <h1>Describe your listing</h1>
        <input className=''
          type="textfield"
          placeholder='e.g. Stay beneath the stars in our open cottage'
          value={props.description}
          onChange={props.handleInput('description')}
        />
        <p>Things to consider mentioning</p>
        <ul>
          <li>Information on scenery</li>
          <li>Any relevant historical information</li>
          <li>Nearby attractions</li>
          <li>Link,phone number,and email addresses are not supported</li>
        </ul>
         <button onClick={props.nextPage}>Next</button>
        <button onClick={props.prevPage}>Previous</button>
        </div>
    )
  }


export default Description