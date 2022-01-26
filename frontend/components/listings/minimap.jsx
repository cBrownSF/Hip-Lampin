import React from 'react'
import ReactDOM from 'react-dom';
import CreateMap from './newmap';
const miniMap =(props)=>{
  
  

  
  if (props.currentPage !== 8) {
    return null
  }
   return(
     <div>
       <CreateMap
       lat={props.lat}
       lng={props.lng}
       zip={props.zip}
       city={props.city}
       state={props.state}
       address={props.address}
       />
       <div className='map-button'>
         <button type="button" className='previous-button' onClick={props.prevPage}>Previous</button>
         <button type="button" className='next-button-with-prev' onClick={props.nextPage}>Next</button>
       </div>
     </div>
   )
}

export default miniMap;