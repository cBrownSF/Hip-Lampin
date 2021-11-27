import React from 'react'
import { Link } from "react-router-dom";


const NameForm = (props) =>{
console.log(props)
 if (props.currentPage !== 1){
   return null
 }


  
  return (
    <div >
          <h3> Name your Listing</h3>
          <p>This should be a short title describing your site and landcscape</p>
          <input
            type="text"
            placeholder='e.g cozy cottage'
            value={props.name}
            onChange={props.handleInput('name')}
          />
          <h2>Tips for naming your listing</h2>
          <ul>
            <li>Keep it short! 3-5 words are recommended</li>
            <li>Describe your listing</li>
            <li>Double check for typos</li>
          </ul>
      <button onClick={props.nextPage}>Next</button>
        </div>
        )
      }
    

   export default NameForm