import React from "react";
class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    const currentUser = this.props
    this.state={
    intro= currentUser.intro,
    photoFile: currentUser.photoFile ||null,
    photoURL: currentUser.photoURL ||null
    };
    this.handleFile=this.handleFile.bind(this)
  }
  handleFile(e) {
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
    return ( 
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
        <div className="uploadphoto">
          <input type="file" 
          className="uploadphoto" 
          onChange={this.handleFile}
          />
        </div>
        <div>

        </div>
        <div>

        </div>
      </form>
      );
  }
}
 
export default EditProfile ;