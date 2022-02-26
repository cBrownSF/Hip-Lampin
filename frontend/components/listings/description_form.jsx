import React from 'react'
import { Link } from "react-router-dom";
const Description = (props) => {

if (props.currentPage !== 2){
  return null
}

const letterCount = () => {
    let charLeft = (10 - props.description.length);
  return charLeft <= 0 ? <div className='hidden'>no more characters required </div> : <div>{charLeft} more characters needed</div>;
  }
    return(
    <div className="name-box">
     <br/>
 
          <h1 id='name-title'>Describe your listing</h1>
          <p id='blurb'>Provide a bit more detail about what Hipcampers can see,do,and expect here</p>
        <textarea id='description-text-area'
          type="textarea"
          placeholder='e.g. Stay beneath the stars in our open cottage'
          value={props.description}
          onChange={props.handleInput('description')}
        />
        <div>
        <div id='required'>{letterCount()}</div>
        </div>
        <p id ='tips-descript'>THINGS TO CONSIDER MENTIONING</p>
        <ul id ='tips-list'>
          <li>Information on scenery</li>
          <li>Any relevant historical information</li>
          <li>Nearby attractions</li>
        </ul>
        <br />
        <br />
        <div className='descript-buttons'>
          <button type="button" className = 'previous-button' onClick={props.prevPage}>Previous</button>
          {props.formType==='create' ?(
          <button type="button" className = 'next-button-with-prev' onClick={props.nextPage}>Next</button>
          ) :(
              <button type="button" className='next-button-with-prev' onClick={props.nextPage}>Next</button>
          )
          }
          </div>
        </div>
    )
  }


export default Description