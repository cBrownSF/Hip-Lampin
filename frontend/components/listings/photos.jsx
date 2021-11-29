import React from 'react'

const PhotoForm = (props) => {
  if (props.currentPage !== 7) {
    return null
  }

return(
  <div>
    <div className="button-holder">
      <h3>Image preview </h3>
    {props.photoUrl ? <img height="200px" width="200px" src={props.photoUrl} /> : null}
      <h3 className="button-holder">Add a Picture</h3>
      <input type="file" className="new-bench-button"
        onChange={props.handleFile} />
    </div>
    <div className='photos-buttons'>
      <button className='previous-button' onClick={props.prevPage}>Previous</button>
      <button className='next-button-with-prev' onClick={props.nextPage}>Next</button>
    </div>
</div>
)
}

export default PhotoForm;