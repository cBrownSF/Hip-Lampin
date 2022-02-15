import React from 'react'
import { Link } from 'react-router-dom';
import ListingIndexItem from '../search/listing_index_item';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    const user=this.props
    this.state={
      intro: this.props.user.intro || '',
      photoFile: user.photoFile || null,
      photoURL: user.photoURL || null,
      created_at:this.props.user.created_at || null
     }
    this.imageInput = React.createRef()
    this.clickImageInput = this.clickImageInput.bind(this)
    this.handleFile = this.handleFile.bind(this)
    }
  
  componentDidMount() {
    this.props.receiveListings()
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.currentTarget.value })
    }
  }
  getTime() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let d = new Date(this.state.created_at)
    let monthName = months[d.getMonth()]
    let year = d.getFullYear()
    return `${monthName}, ${year}`
  }

  clickImageInput(e) {
    e.preventDefault()
    const { currentUser, user} = this.props
    if (currentUser.id !== user.id) return false
    this.imageInput.current.click()
  }
  handleFile(e) {
    const { currentUser, user } = this.props

    if (currentUser.id !== user.id) return false
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoURL: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
      debugger;
    }
  }

  render() { 
    const {intro,city,state,year, profilePic}=this.state
   const {currentUser,user,listings}=this.props
   if (!user){
     return null
   }


   debugger
    return (
      <div className="profile-div">
        <div className='left-side-prof'>
          <div className="header">
            <div className="photo-and-name">
              <div className="upload-prof-div">
                {this.state.photoURL ? <img 
                src={this.state.photoURL} 
                className="prof-img"
                />
                  : (
                    <button
                      className="button-prof-pic"
                      onClick={(e) => {
                        this.clickImageInput(e)
                      }}
                    >Add Profile Picture</button>)}
                <input type="file"
                  className="upload-prof-pic"
                  accept="image/*"
                  onChange={this.handleFile}
                  ref={this.imageInput}
                  style={({ display: "none" })}
                />
              </div>
              <div>
            {currentUser.id === user.id? 
                  <div className="prof-name">Welcome {user.fname}!
                <p><Link className="link-prof"to={`/profile/${user.id}/edit`} >Edit Optional Intro</Link></p>
              </div>
                  : <div className="prof-name">{user.fname} {user.lname[0]}</div>}
              </div>
            </div>
            <div>
              <div className='intro-div'>
                {this.editable?(
                <div>
                 <textarea 
                 className=""
                 type="textarea"
                 placeholder="give a little introduction!"
                 value={this.state.intro}
                 onChange={this.handleInput('intro')}
                 ></textarea>
                </div>):(
                <p className="intro">{intro}</p>
                )
                }
              </div>
              <div>
                <p><i class="fas fa-heart"></i>Hipcamper since {this.getTime()}</p>
              </div>
            </div>
          </div>
          <div className="email-div">
            <p className="greyed-trust">Trusted Hipcamper</p>
            <span><i class="far fa-check-square"></i><p className="email">Email Address</p></span>
        </div>
        </div>
      <div className='users-listings'> 
          <div className="trip-listing-header">
            {currentUser.id === user.id ?
              <div className="trip-listing-profile-title">Your Listings</div>
              : <div className="trip-listing-profile-title">{user.fname}'s Listings</div>}
        </div>
        <div className="user-listing-item">
          {listings.map((listing) => {
            if (listing.host_id === user.id) {
              return (
            <ListingIndexItem
              listings={listing}
              key={listing.id}
            />
            )}})}
          </div>     
        </div>  
        <div className="prof-trips">
        <div className="trip-listing-header">
          {currentUser.id === user.id ?
            <div className="trip-listing-profile-title">Your Trips</div>
            : <div className="trip-listing-profile-title">{user.fname}'s Trips</div>}
        </div>

        </div>
      </div>
     );
  }
}
 
export default Profile;