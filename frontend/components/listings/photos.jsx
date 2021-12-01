import React from 'react'

const PhotoForm = (props) => {
  if (props.currentPage !== 7) {
    return null
  }

return(
  <div className='name-box'>
    <br/>
    <div className="button-holder">
      <h1 id='name-title'>Show Hipcampers where they'll be staying </h1>
    {props.photoUrl ? <img height="200px" width="200px" src={props.photoUrl} /> : null}
      
      <input type="file" className="next-button-with-prev" 
        onChange={props.handleFile} />Add a Photo
    </div>
    <div className='photos-buttons'>
      <button className='previous-button' onClick={props.prevPage}>Previous</button>
      <button className='next-button-with-prev' onClick={props.nextPage}>Next</button>
    </div>
</div>
)
}

export default PhotoForm;