import React from 'react'
import { Link } from 'react-router-dom';
import ListingIndexItem from '../search/listing_index_item';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    
    this.state={
      intro: this.props.user.intro || '',
      profilePic:this.props.user.profilePic || null,
      created_at:this.props.user.created_at || null
     }
    }
  
  componentDidMount() {
    this.props.receiveListings()

  }
  getTime() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let d = new Date(this.state.created_at)
    let monthName = months[d.getMonth()]
    let year = d.getFullYear()
    return `${monthName}, ${year}`
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
              <div>PHoto upload</div>
              <div>
            {currentUser.id === user.id? 
                  <div className="prof-name">Welcome {user.fname}!
                <p ><Link className="link-prof"to={`/profile/${user.id}/edit`}>Edit Profile</Link></p>
              </div>
                  : <div className="prof-name">{user.fname} {user.lname[0]}</div>}
              </div>
            </div>
            <div>
              <div className='intro-div'>
                <p className="intro">{intro}</p>
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