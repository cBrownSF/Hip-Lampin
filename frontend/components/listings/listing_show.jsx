import React from 'react'
import { Link } from 'react-router-dom';
import { hashHistory } from 'react-router';
class ListingShow extends React.Component {

  componentDidMount() {
    this.props.receiveListing(this.props.match.params.listingId);
    debugger;
  }
  
  // componentDidUpdate() {
  //   if (!this.props.listing){
  //     this.props.receiveListing(this.props.match.params.listingId);
  //   }
  // }

  onDelete(){
    if (this.props.currentUser.id === this.props.listing.host_id){
      this.props.deleteListing(this.props.listing.id)
      .then(()=>{
        debugger;
       this.props.history.push('/')
      })
      //redirect here instead of dispatch
    }else{
      return ''
    }
  }
  
  updatedProps(word){
    return word === true ? 'available': 'unavailable'
  }

  updatedYesProps(word) {
    return word === true ? 'Yes' : 'No'
  }
  
render() {
 
  if (!this.props.listing){
    return null;
  }
  debugger;
  const listing = this.props.listing
  
  const descript = {
    pathname: `/listings/${this.props.listing.id}/edit`,
    search:'2',
    state: this.props.listing 
  }
  const amenities = {
    pathname: `/listings/${this.props.listing.id}/edit`,
    search: '4',
    state: this.props.listing
  }
  const cost = {
    pathname: `/listings/${this.props.listing.id}/edit`,
      search: '3',
        state: this.props.listing
  }
  const nameEdit = {
    pathname: `/listings/${this.props.listing.id}/edit`,
    search: '1',
    state: this.props.listing
  }
  const activities = {
    pathname: `/listings/${this.props.listing.id}/edit`,
    search: '5',
    state: this.props.listing
  }
  const details = {
    pathname: `/listings/${this.props.listing.id}/edit`,
    search: '6',
    state: this.props.listing
  }
  const checkIn = {
    pathname: `/listings/${this.props.listing.id}/edit`,
    search: '11',
    state: this.props.listing
  }
  const photo = {
    pathname: `/listings/${this.props.listing.id}/edit`,
    search: '9',
    state: this.props.listing
  }
  const isHost= (link)=>{
    if (this.props.currentUser && this.props.currentUser.id === this.props.listing.host_id) {
    return <span id="link-location"><Link id='show-link' to={link}>Edit</Link></span>
  } else {
    return <span> </span>
  }
}
  return(
   
    <div className='show-container'>
      <p id="link-location"><Link id='show-link' to={photo}>Upload</Link></p>
      <div id="side-pic"></div>
      <div id = "show-photo">
        <img src={listing.photos[0]} width="400" height = '200' alt="coverphoto" />
        <img src={listing.photos[1]} width="400" height = '200' alt="coverphoto2" />
      </div>
      <div id="side-pic"></div>
      <div id="left"></div>
      <div id = 'name-show'>
        <p id="link-location">{isHost(nameEdit)}</p>
        <h1>{listing.name}</h1>
          <p id = 'nearby-show'>{listing.city}</p>
          <p id = 'nearby-show'>{listing.zip_code}</p>

          <hr id="solid" />
      </div>
      <div id='cost-show'>
        <p id="link-location">{isHost(cost)}</p>
        <span id="price">{`$${listing.cost}`}</span>
        <p id='per-night'>per night(2 guests)</p>
        
      </div>
      <div id="left"></div>
      <div id= 'descript-show'>
        <p id="link-location">{isHost(descript)}</p>
        <p>{listing.description}</p>
      </div>
      <div id="right"></div>
      
      <div id="left"></div>
      <div id= 'activities-show'>
        <p id="link-location">{isHost(amenities)}</p>
          <p id='headers'>Amenities</p>
        <ul>
          <li id="text">{`Trash cans are ${this.updatedProps(listing.is_trash)}`}</li>
          <li id="text">{`Showers ${this.updatedProps(listing.is_shower)}`}</li>
          <li id="text">{`Wifi ${this.updatedProps(listing.is_wifi)}`}</li>
          <li id="text">{`Picnic tables ${this.updatedProps(listing.is_picnic_table)}`}</li>
          <li id="text">{`Kitchen ${this.updatedProps(listing.is_kitchen)}`}</li>
        </ul>
        </div>

      <div id= 'activities-show'>
         <p id="link-location">{isHost(amenities)}</p>
          <p id='headers'>Essentials</p>
          <ul>
            <li id="text">{`Toilet is ${this.updatedProps(listing.is_toilet)}`}</li>
            <li id="text">{`Campfires are ${this.updatedProps(listing.is_campfire_allowed)}`}</li>
          </ul>
        </div>

      <div id='activities-show'>
        <p id="link-location">{isHost(activities)}</p>
        <p id='headers'>Activities</p>
        <ul>
          <li id='text'>{`Hiking: ${this.updatedYesProps(listing.is_hiking)}`}</li>
          <li id='text'>{`Swimming: ${this.updatedYesProps(listing.is_swimming)}`}</li>
          <li id='text'>{`Paddling: ${this.updatedYesProps(listing.is_paddling)}`}</li>
          <li id='text'>{`Wildlife:${this.updatedYesProps(listing.is_wildlife)}`}</li>
          <li id='text'>{`Fishing: ${this.updatedYesProps(listing.is_fishing)}`}</li>
      </ul>
      </div>
      <div id="right"></div>

      <div id="left"></div>
      <div id="details-show">
        <p id="link-location">{isHost(details)}</p>
        <p id="headers">Details</p>
        <ul>
          <li id="list-item">On arrival: <span className="list-item-data">{listing.on_arrival}</span></li>
          <li id="list-item">Minimum nights: <span className="list-item-data">{listing.minimum_night}</span></li>
          <li id="list-item">Check in: <span className="list-item-data">{`After ${listing.check_in_time}`}</span></li>
          <li id="list-item">Check out: <span className="list-item-data">{`Before ${listing.check_out_time}`}</span></li>
          <li id="list-item">Cancellation policy: <span className="list-item-data">{listing.cancellation_policy}</span></li>
          <li id="list-item">Response time: <span className="list-item-data">{`Within ${listing.response_time}`}</span></li>
          <li id="list-item">Accepts Booking: <span className="list-item-data">{listing.booking_time}</span></li>
        </ul>
      </div>
      
      <div id="right"></div>
      <div>
        {this.props.currentUser && this.props.currentUser.id === this.props.listing.host_id?(
        <button id='show-delete-button' onClick={()=>this.onDelete()}>delete listing</button>
        ) :''}
      </div>
    </div>
  )
  }
}



export default ListingShow;