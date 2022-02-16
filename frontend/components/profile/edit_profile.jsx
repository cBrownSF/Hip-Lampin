import React from "react";
class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    const currentUser = this.props
    
  
    this.state={
    // intro= '',
    photoFile: currentUser.photoFile ||null,
    photoURL: currentUser.photoURL ||null,
    introduction: ''
   
    };
    this.imageInput = React.createRef()
    this.clickImageInput=this.clickImageInput.bind(this)
    this.handleFile=this.handleFile.bind(this)
  }
  componentDidMount(){
    debugger
  
  }
  clickImageInput(e) {
    e.preventDefault()
    if (currentUser.id !== user.id) return false
    this.imageInput.current.click()
  }
  handleFile(e) {
    if (currentUser.id !== user.id) return false 
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoURL: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
      
    }
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.currentTarget.value })
    }
  }
  render() { 
    // if (!this.props.listings){
    //   debugger;
    //   return null
    // }
    return ( 
      <div>
      <form >

        <div>
         Add an Intro to your profile
          <input 
          type="text" 
          className="intro"
          value={this.state.intro || ''}
          onChange={this.handleInput}
          />
        </div>
        <div className="upload-prof-div">
            {this.state.photoURL ? <img src={this.state.photoURL} />
          :(
          <button 
            className= "button-prof-pic"
            onClick={(e)=>{
              this.clickImageInput(e)
            }}
          >Add Profile Picture</button>)}
          <input type="file" 
            className="upload-prof-pic" 
            accept="image/*"
            onChange={this.handleFile}
            ref={this.imageInput}
            style={({display:"none"})}
          />
        </div>
      </form>
      </div>
      );
  }
}
 
export default EditProfile ;