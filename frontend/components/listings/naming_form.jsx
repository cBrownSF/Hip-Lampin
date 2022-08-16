import React from 'react'

const NameForm = (props) => {
 if (props.currentPage !== 1){
   return null
 }
  const letterCount = () => {
    let charLeft = (10 - props.name.length);
    return charLeft <= 0 ? <div className='hidden'>no more characters required </div> : <div>{charLeft} more characters needed</div> ;
  }
  
  return (
    <div className="name-box">
      <br/>
          <h1 id ='name-title'>Name your listing</h1>
          <p id='blurb'>This should be a short title describing your site and landcscape</p>
          <input className ='text-bubble'
            type="text"
            placeholder='e.g. cozy cottage'
            value={props.name}
            onChange={props.handleInput('name')}
          />
          <div>
            <div id='required'>{letterCount()}</div>
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
          <div id="name-button">
      <button type="button" className='next-button-single' onClick={props.nextPage}>Next</button>
        </div>
      </div>
      )
    }
   export default NameForm