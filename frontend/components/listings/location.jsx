import React from 'react'

const locationForm = (props) => {
  if (props.currentPage !== 7) {
    return null
  }
  
  return (
    <div className="name-box">
      <br/>
      <h1 id="name-title">Where is the property located?</h1>
      <div className="location-input-div">
      {props.formType==='edit' ? (
      <input id="autocomplete"
        className='text-bubble'
        type="text"
        placeholder="Enter new address"
        onKeyPress={props.keyDown}
        value={props.address}
        onChange={props.handleInput('street_address')}
      onSelect={props.auto}
      />
      ) :(
          <input id="autocomplete"
            className='text-bubble'
            type="text"
            placeholder="Enter new address"
            onKeyPress={props.keyDown}
            onSelect={props.auto}
          /> 
      )}
      </div>
      <div className='location-instruction'>
        <p>You must select a valid address to continue</p>
      </div>
      <div className='location-button'>
        <button type="button" className='previous-button' onClick={props.prevPage}>Previous</button>
        <button type="button" className='next-button-with-prev' onClick={props.nextPage}>Next</button>
      </div>
    </div>
    )
  }
  export default locationForm;