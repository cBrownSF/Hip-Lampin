import React from 'react'
import { Link } from "react-router-dom";
const Description = (props) => {
if (props.currentPage !== 2){
  return null
}

const letterCount = () => {
    let charLeft = (10 - props.description.length);
    return charLeft <= 0 ? '' : `${charLeft} more characters needed`;
  }
    return(
      <div className = 'name-box'>
     <br/>
     {console.log(props.description.length)}
          <h1 id='name-title'>Describe your listing</h1>
          <p id='blurb'>Provide a bit more detail about what Hipcampers can see,do,and expect here</p>
        <textarea id='description-text-area'
          type="textarea"
          placeholder='e.g. Stay beneath the stars in our open cottage'
          value={props.description}
          onChange={props.handleInput('description')}
        />
        <p id='required'>{letterCount()}</p>
        <p id ='tips-descript'>THINGS TO CONSIDER MENTIONING</p>
        <ul id ='tips-list'>
          <li>Information on scenery</li>
          <li>Any relevant historical information</li>
          <li>Nearby attractions</li>
        </ul>
        
        <div className='descript-buttons'>
        <button className = 'previous-button' onClick={props.prevPage}>Previous</button>
         <button className = 'next-button-with-prev' onClick={props.nextPage}>Next</button>
        </div>
        </div>
    )
  }


export default Description