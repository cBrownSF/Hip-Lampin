import React from 'react'


const locationForm = (props) => {

  if (props.currentPage !== 7) {
    return null
  }

  return (
    <div className="name-box">
      <br/>
      <h1 id="name-title">Where is the property located?</h1>
      {props.formType==='edit' ? (
      <input id="autocomplete"
        className='text-bubble'
        type="text"
        placeholder="enter new address"
        onKeyPress={props.keyDown}
        value={props.address}
        //BE CLEAR THAT YOU CAN SKIP THE PAGE IF YOU'D LIKE TO KEEP THE SAME ADDRESS OR PUT ADDRESS AS VALUE AND let user skip it
        onChange={props.handleInput('street_address')}
      onSelect={props.auto}
      />
      ) :(
          <input id="autocomplete"
            className='text-bubble'
            type="text"
            placeholder="enter new address"
            onKeyPress={props.keyDown}
            // value={props.address}
            //BE CLEAR THAT YOU CAN SKIP THE PAGE IF YOU'D LIKE TO KEEP THE SAME ADDRESS OR PUT ADDRESS AS VALUE AND let user skip it
            // onChange={props.handleInput('street_address')}
            onSelect={props.auto}
          /> 
      )}
      
      
      <div className='location-button'>
        <button type="button" className='previous-button' onClick={props.prevPage}>Previous</button>
        <button type="button" className='next-button-with-prev' onClick={props.nextPage}>Next</button>
      </div>
    </div>
    )
  }
  export default locationForm;