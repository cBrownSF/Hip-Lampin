import React from 'react'

const PhotoForm = (props) => {
  if (props.currentPage !== 9) {
    return null
  }

return(
  <div className='name-box'>
    <br/>
    <div >
      <h1 id='name-title'>Show Hipcampers where they'll be staying </h1>
     
    {props.photoURL ? <img className="upload-photo" height="200px" width="200px" src={props.photoURL} /> : null}
    
      <label for="form-file-upload" id="button-photo-upload">
        Upload Photo
      </label>
      <input id="form-file-upload" type="file"  
        onChange={props.handleFile} />
    </div>
    <div className='photos-buttons'>
      <button type="button" className='previous-button' onClick={props.prevPage}>Previous</button>
      <button type="button" className='next-button-with-prev' onClick={props.nextPage}>Next</button>
    </div>
</div>
)
}

export default PhotoForm;