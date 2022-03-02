import React from 'react'
import { Link } from 'react-router-dom';
import ReservationIndexItem from '../reservations/reservation_index_item';
import ListingIndexItem from '../search/listing_index_item';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    const user=this.props.user
   
    this.state={}
    this.imageInput = React.createRef()
    this.clickImageInput = this.clickImageInput.bind(this)
    this.handleFile = this.handleFile.bind(this)
    this.flipEdit=this.flipEdit.bind(this)
    this.revertIntro=this.revertIntro.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    }
  
  componentDidMount() {
   
    const user = this.props.user
    this.props.receiveListings()
    this.props.receiveUser(this.props.match.params.profileId).then((user)=>
    {

      return this.setState({
        intro: user.user.intro || '',
        originalIntro:user.user.intro,
        photoFile: user.user.photoFile || null,
        photoURL: user.user.photoURL || null,
        created_at: user.user.created_at || null,
        editable: false,
        newPic: false
      })
    }).then(() => this.props.clearErrors())
  }
  componentDidUpdate(prevState){
    if (prevState.photoFile !== this.state.photoFile && this.state.newPic===true){
   
      const formData = new FormData();
      formData.append('user[id]', this.props.user.id)
      formData.append('user[photo]', this.state.photoFile);
      this.props.updateUser(formData).then(()=>{
        return (
          this.setState({
            newPic: false
          })
      )
    })
  }
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
    if (currentUser && currentUser.id !== user.id) return false
    this.imageInput.current.click()
  }
  flipEdit(e){
    const { currentUser, user } = this.props
    e.preventDefault()
      return (
        this.setState((prevState) => ({
          editable:!prevState.editable,
        })))
  }
  revertIntro(e){
    const { intro, originalIntro, editable } = this.state
    e.preventDefault()
    return this.setState((prevState) => ({
        intro:originalIntro,
        editable: !prevState.editable,
    }), () => {

      this.props.clearErrors()
    })
  }
  handleSubmit(e){

    e.preventDefault();
    const formData = new FormData();
    formData.append('user[intro]', this.state.intro)
    formData.append('user[id]', this.props.user.id)
    if (this.state.photoFile) {
      formData.append('user[photo]', this.state.photoFile);
    }

    this.props.updateUser(formData).then(() => this.flipEdit(e))
  }
  handleFile(e) {
    const { currentUser, user } = this.props

    if (currentUser && currentUser.id !== user.id) return false
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoURL: fileReader.result,newPic:true });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }
  renderErrors() {
    if (Object.values(this.props.errors).length >0){
    return (
      <ul className="list-name">
        {this.props.errors.map((error, i) => (
          <li className='errors' key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }
  }
  render() { 
    const {intro}=this.state
    const { currentUser, user, listings, editable}=this.props
    let resArray = currentUser && currentUser.reservations ? Object.values(this.props.currentUser.reservations) : []
    console.log('render')
  //  if (listings.length===0)return null
   if (!Object.values(this.state).length){
      return null
   }
    return (
 
      <div className="profile-div">
        <div className='left-side-prof'>
          <div className="header">
            <div className="photo-and-name">
              <div className="upload-prof-div">
                {this.state.photoURL ? 
                <img 
                src={this.state.photoURL} 
                className="prof-img"
                onClick={(e) => {
                      this.clickImageInput(e)
                    }}
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
            {currentUser && currentUser.id === user.id? 
                  <div className="prof-name">Welcome {user.fname}!
                <p className="link-prof" onClick={(e)=>{
                  this.flipEdit(e)
                }}>Edit Intro</p>
              </div>
                  : <div className="prof-name">{user.fname} {user.lname[0]}</div>}
              </div>
            </div>
            <div>
              <div className='intro-div'>
                {this.state.editable?(
               <form onSubmit={this.handleSubmit} >
                 <textarea 
                    type="textarea"
                    className='text-box-intro'
                    placeholder="give a little introduction!"
                    value={intro}
                    onChange={this.handleInput('intro')}
                 ></textarea>
                 <div className="button-prof-div">
                 <button type="submit" className='submit-prof-button'> Submit</button>
                    <button type="button" className='cancel-prof-button' 
                    onClick={(e) => {
                      this.revertIntro(e)
                    }}
                    > Cancel</button>
                    </div>
                 </form>)
                  // </div>)
                :(
                    <p className="intro">{intro}</p>
                )
                }
                {/* <p className="intro">{intro}</p> */}
              </div>
              <div>{this.renderErrors()}</div>
              <div>
                <p><i class="fas fa-heart"></i>Hipcamper since {this.getTime()}</p>
              </div>
            </div>
          </div>
          <div className="email-div">
            <p className="greyed-trust">Trusted Hipcamper</p>
            <span className="check-box-email"><i class="far fa-check-square"></i><p className="email">Email Address</p></span>
        </div>
        </div>
      <div className='users-listings'> 
          <div className="trip-listing-header">
            {currentUser && currentUser.id === user.id ?
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
          {currentUser && currentUser.id === user.id ?
            <div className="trip-div">
            <p className="trip-listing-profile-title">Your Trips</p>
            {resArray.map(reserv=>{
              return(
             <ReservationIndexItem
              listing={reserv.listing}
              reservation={reserv}
              photos={reserv.photos}
             />
              )
            })}
            </div>
            : <div className="trip-listing-profile-title">{user.fname}'s Trips</div>}
        </div>

        </div>
      </div>
     );
  }
}
 
export default Profile;