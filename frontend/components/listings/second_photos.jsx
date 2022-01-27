import React from "react";
const SecondPhotos = (props) => {
  if (props.currentPage !== 10) {
    return null
  }
  return(
  <div className='name-box'>
    <br />
      <h1 id='name-title'>Second Photos </h1>

      {props.photoURL.length===2 ? (
        <div>
        <img className="upload-photo" height="200px" width="200px" src={props.photoURL[1]} />
          <label for="form-file-upload" id="button-photo-added-upload">
            Replace Photo
          </label>
          <input id="form-file-upload"
            type="file"
            accept=".png, .jpeg"
            onChange={props.handleFile} />
        </div>
        )
        : (
          <div>
          <label for="form-file-upload" id="button-photo-upload">
        Upload Photo
      </label>
      <input id="form-file-upload"
        type="file"
        accept=".png, .jpeg"
        onChange={props.handleFile} />
    </div>
        )
      }

    <div className='photos-buttons'>
      <button type="button" className='previous-button' onClick={props.prevPage}>Previous</button>
      <button type="button" className='next-button-with-prev' onClick={props.nextPage}>Next</button>
    </div>
  </div>
)

}
export default SecondPhotos;