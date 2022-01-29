import React from 'react'


const locationForm = (props) => {

  if (props.currentPage !== 7) {
    return null
  }

  return (
    <div className="name-box">
      <br/>
      <h1 id="name-title">Where is the property located?</h1>
      
      <input id="autocomplete"
        className='text-bubble'
        type="text"
        placeholder="enter new address"
        onKeyPress={props.keyDown}
        value={props.address}
        //BE CLEAR THAT YOU CAN SKIP THE PAGE IF YOU'D LIKE TO KEEP THE SAME ADDRESS OR PUT ADDRESS AS VALUE AND let user skip it
        // onChange={props.handleInput('street_address')}
      onSelect={props.auto}
      />
      {/* <p>City</p>
      <input type="text" 
        value={props.city}
        onChange={props.handleInput('city')}
      />
     
      <p>State</p>
      <input type="text" 
        value={props.state}
        onChange={props.handleInput('state')}
      />
      <p>Zip Code</p>
      <input type="text" 
        value={props.zip}
        onChange={props.handleInput('zip_code')}
      /> */}
      
      <div className='location-button'>
        <button type="button" className='previous-button' onClick={props.prevPage}>Previous</button>
        <button type="button" className='next-button-with-prev' onClick={props.nextPage}>Next</button>
      </div>
    </div>
    )
  }
  export default locationForm;