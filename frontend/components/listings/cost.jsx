import React from 'react'
import { Link } from "react-router-dom";
const CostForm = (props) => {
  
  if (props.currentPage !== 3) {
    return null
  }
  // const hideButton = ()=>{  
  //   if (props.listing !== ''){
  //   return (
  //     <Link className = 'x-button' to={`/listings/${props.listing.id}`}>✖</Link>
  //   )
  //   }else{
  //     return ''
  //   }
  // }

  return(
    <div className="name-box">
      {/* <p id='hide-button'>{hideButton()}</p> */}
      
      <br/>
        <h1 id='name-title'>How much do you want to charge per night?</h1>
        <input className = "text-bubble"
          type="text"
          placeholder='e.g. 80'
          value={props.cost}
          onChange={props.handleNumInput('cost')}
          onKeyDown={props.keyPress}
        />
      <p id='required'>This is a required field</p>
      <br/>
      <br/>
      <br/>
        <div>
     <h1 id='act-amen-title'>Minimum nights stay</h1>
        <select className = "select-bubble" value={props.minNight} onChange={props.handleInput('minimum_night')}>
          <option value="1">1 Night</option>
          <option value="2">2 Nights</option>
          <option value="3">3 Nights</option>
          <option value="4">4 Nights</option>
        </select>
      </div>
      

        <div className='cost-buttons'>
      <button className='previous-button' onClick={props.prevPage}>Previous</button>
      <button className='next-button-with-prev' onClick={props.nextPage}>Next</button>
    </div>
    </div>
  )
}


export default CostForm;
