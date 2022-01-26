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
        onKeyPress={props.keyPress} 
        // value={props.address}
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
      
      <div className='amenities-button'>
        <button className='previous-button' onClick={props.prevPage}>Previous</button>
        <button className='next-button-with-prev' onClick={props.nextPage}>Next</button>
      </div>
    </div>
    )
  }
  export default locationForm;