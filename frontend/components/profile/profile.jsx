import React from 'react'
import { Link } from 'react-router-dom';
class Profile extends React.Component {
  constructor(props) {
    super(props);
    
    this.state={
      intro: this.props.user.intro || '',
      city:this.props.user.city || '',
      profilePic:this.props.user.profilePic || null,
      state:'',
      year:new Date(this.props.currentUser.created_at).getFullYear()
     }
    }
  
 
  
  render() { 
    const {intro,city,state,year, profilePic}=this.state
   const {currentUser,user,listing}=this.props
   if (!user){
     return null
   }
   debugger
    return (
      <div>
        <div className="header">
          {currentUser.id === user.id? 
          <div>Welcome {user.fname}!
              <p><Link to={`/profile/${user.id}/edit`}>Edit Profile</Link></p>
            </div>
          : `${user.fname} ${user.lname[0]}`}
        </div>
      <div>
        photo upload area
        <p>Intro: {intro}</p>
        <p>Hipcamper since {year}</p>
      </div>
      <h1>
        <p>
          
        </p>
      </h1>
      </div>
     );
  }
}
 
export default Profile;