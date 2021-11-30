import React from 'react'
import { Link } from "react-router-dom";


const NameForm = (props) =>{
 if (props.currentPage !== 1){
   return null
 }

  const letterCount = () => {
    let charLeft = (10 - props.name.length);
    return charLeft <= 0 ? '' : `${charLeft} more characters needed` ;
  }
  
  
  return (
    <div className="name-box">
      <br/>
          <div>
          <p id ='name-title'>Name your listing</p>
          <p id='blurb'>This should be a short title describing your site and landcscape</p>
          </div>
          <input className ='text-bubble'
            type="text"
            placeholder='e.g. cozy cottage'
            value={props.name}
            onChange={props.handleInput('name')}
          />
          <div>
        <p id='required'>{letterCount()}</p>
            </div>
          <p id='tips'>TIPS FOR NAMING YOUR LISTING</p>
          <ul id='tips-list'>
            <li>Keep it short! 3-5 words are recommended</li>
            <li>Describe your listing</li>
            <li>Double check for typos</li>
          </ul>
          <br/>
          <br/>
          <br/>
      <button className='next-button-single' onClick={props.nextPage}>Next</button>
        </div>
        )
      }
    

   export default NameForm