import React from 'react'
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
       styling='mini-map'
       />
       <div className='map-button'>
         <button type="button" className='previous-button' onClick={props.prevPage}>Retry</button>
         <button type="button" className='next-button-with-prev' onClick={props.nextPage}>Confirm</button>
       </div>
     </div>
   )
}

export default miniMap;