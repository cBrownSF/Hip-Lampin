import React from 'react'
import { compose } from 'redux';
class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      photoURL:[],
      photoFile: [],
      edit:false
     }
    this.handleImage=this.handleImage.bind(this)
    this.mainInput = React.createRef()
    this.secondInput=React.createRef()
    this.thirdInput=React.createRef()
  }
  componentDidUpdate(){
    if (this.state.edit === true){

      this.props.handleFileChange(this.state.photoURL, this.state.photoFile)
      return this.setState({
        edit: false
      })
    }
  }
  handleImage(e,i) {

 
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    const { photoFile, photoURL } = this.state;

      fileReader.onloadend = () => {
        let photos = [...photoFile]
        let url = [...photoURL]
        photos[i] = file
        url[i] = fileReader.result
        this.setState({
          photoFile: photos,
          photoURL: url,
          edit:true
        })
      }
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      fileReader.readAsDataURL(file)

    }
  }
  render() { 
    if (this.props.currentPage !== 9) {
    return null
  }
 
    return ( 
      <div className='name-box'>
    <br/>
       <h1 id='name-title'>Show Hipcampers where they'll be staying </h1>
      <div className='picture-row'>
        <div>
        {this.state.photoURL.length ?
          <img
            src={this.state.photoURL[0]}
            className="form-img-prev"
            onClick={(e) => {
              e.preventDefault();
              this.mainInput.current.click()
            }}
          />
          : (
            <button
              className="button-add-pic"
              onClick={(e) => {
                e.preventDefault();
                this.mainInput.current.click()
              }}
            >Add Picture</button>)}
        <input type="file"
          className="upload-prof-pic"
          accept="image/*"
          onChange={(e)=>this.handleImage(e,0)}
          ref={this.mainInput}
          style={({ display: "none" })}
        />
        </div>
        <div className='photos-div'>
          {this.state.photoURL.length >=2?
            <img
              src={this.state.photoURL[1]}
                className="form-img-prev"
              onClick={(e) => {
                e.preventDefault();
                this.secondInput.current.click()
              }}
            />
            : (
              <button
                className="button-add-pic"
                onClick={(e) => {
                  e.preventDefault();
                  this.secondInput.current.click()
                }}
              >Add Picture</button>)}
          <input type="file"
            className="upload-prof-pic"
            accept="image/*"
            onChange={(e) => this.handleImage(e, 1)}
            ref={this.secondInput}
            style={({ display: "none" })}
          />
        </div>
        <div>
          {this.state.photoURL.length ===3?
            <img
              src={this.state.photoURL[2]}
                className="form-img-prev"
              onClick={(e) => {
                e.preventDefault();
                this.thirdInput.current.click()
              }}
            />
            : (
              <button
                className="button-add-pic"
                onClick={(e) => {
                  e.preventDefault();
                  this.thirdInput.current.click()
                }}
              >Add Picture</button>)}
          <input type="file"
            className="upload-prof-pic"
            accept="image/*"
            onChange={(e) => this.handleImage(e, 2)}
            ref={this.thirdInput}
            style={({ display: "none" })}
          />
        </div>
        </div>
        <div>
          <ul className="photo-list">
            <li className="photo-list-item">All three pictures are required</li>
            <li className="photo-list-item">Must be a PNG or JPEG</li>
            <li className="photo-list-item">Recommended size is</li>
          </ul>
        </div>
        <div className='photos-buttons'>
      <button type="button" className='previous-button' onClick={this.props.prevPage}>Previous</button>
      <button type="button" className='next-button-with-prev' onClick={this.props.nextPage}>Next</button>
     </div>
      </div>
     );
  }
}
 
export default PhotoForm;
