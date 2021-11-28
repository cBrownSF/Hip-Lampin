import React from 'react'
import { Link } from "react-router-dom";
const Description = (props) => {
if (props.currentPage !== 2){
  return null
}
    return(
      <div>
     
          <h1>Describe your listing</h1>
        <textarea 
          type="textarea"
          placeholder='e.g. Stay beneath the stars in our open cottage'
          value={props.description}
          onChange={props.handleInput('description')}
        />
        <p className ='above-descript-list'>Things to consider mentioning</p>
        <ul className='description-list'>
          <li>Information on scenery</li>
          <li>Any relevant historical information</li>
          <li>Nearby attractions</li>
          <li>Link,phone number,and email addresses are not supported</li>
        </ul>
         <button className = 'next-button' onClick={props.nextPage}>Next</button>
        <button className = 'previous-button' onClick={props.prevPage}>Previous</button>
        </div>
    )
  }


export default Description