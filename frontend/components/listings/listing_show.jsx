import React from 'react'
import { Link } from 'react-router-dom';

class ListingShow extends React.Component {

  componentDidMount() {
    this.props.receiveListing(this.props.match.params.listingId);
  }
  componentDidUpdate() {
    console.log(this.props)
    if (!this.props.listing){
      this.props.receiveListing(this.props.match.params.listingId);
    }
  }

  onDelete(){
    if (this.props.currentUser.id === this.props.listing.host_id){
      this.props.deleteListing(this.props.listing.id)
    }else{
      debugger;
      return ''
    }
  }
  
  updatedProps(word){
    return word === true ? 'available': 'unavailable'
  }
  
  showEdit(){
    if (this.props.currentUser.id === this.props.listing.host_id){
      return <p id="link-location"><Link id='show-link' to={descript}>Edit</Link></p>
    }else{
      return <p></p>
    }
  }

render() {
 
  if (!this.props.listing){
    return null;
  }

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
  const nameedit = {
    pathname: `/listings/${this.props.listing.id}/edit`,
    search: '1',
    state: this.props.listing
  }
  return(
   
    <div className='show-container'>
      <div id="side-pic"></div>
      <div id = "show-photo">
        <img src={listing.photoURL} width="925" height = '300' alt="coverphoto" />
      </div>
      <div id="side-pic"></div>

      
      <div id="left"></div>
      <div id = 'name-show'>
        <p id="link-location"><Link id = 'show-link'to={nameedit}>Edit</Link></p>
        <h1>{listing.name}</h1>
          <p id = 'nearby-show'>Nearby: Golden Gate Bridge</p>
          <hr id="solid" />
      </div>
      <div id='cost-show'>
        <p id="link-location"><Link id='show-link' to={cost}>Edit</Link></p>
        <span id="price">{`$${listing.cost}`}</span>
        <p id='per-night'>per night(2 guests)</p>
        
      
       
      </div>
      <div id="left"></div>
      <div id= 'descript-show'>
        <p id="link-location"><Link id='show-link' to={descript}>Edit</Link></p>
        <span>{listing.description}</span>
      </div>
      <div id="right"></div>
      
      <div id="left"></div>
      <div id= 'activities-show'>
        <p id="link-location"><Link id='show-link' to={amenities}>Edit</Link></p>
          <p id='headers'>Amenities</p>
        <ul>
          <li id="text">{`Trash cans ${this.updatedProps(listing.is_trash)}`}</li>
          <li id="text">{`Showers ${this.updatedProps(listing.is_shower)}`}</li>
          <li id="text">{`Wifi ${this.updatedProps(listing.is_wifi)}`}</li>
          <li id="text">{`Picnic tables ${this.updatedProps(listing.is_picnic_table)}`}</li>
        </ul>
        </div>

      <div id= 'activities-show'>
          <p id="link-location" ><Link id='show-link' to={amenities}>Edit</Link></p>
          <p id='headers'>Essentials</p>
          <ul>
            <li id="text">{`Toilet is ${this.updatedProps(listing.is_toilet)}`}</li>
            <li id="text">{`Campfires are ${this.updatedProps(listing.is_campfire_allowed)}`}</li>
          </ul>
        </div>

        <div id='activities-show'>
          <span id='headers'>Activities</span>
          <span>{listing.is_hiking}</span>
          <span>{listing.is_swimming}</span>
          <span>{listing.is_paddling}</span>
          <span>{listing.is_wildlife}</span>
          <span>{listing.is_fishing}</span>
        </div>
  <div id="right"></div>

      <div id="left"></div>
      <div id="details-show">
        <span>Details</span>
        <ul>
          <li className="list-item">On arrival: <span className="list-item-data">{listing.on_arrival}</span></li>
          <li className="list-item">Minimum nights: <span className="list-item-data">{listing.on_arrival}</span></li>
          <li className="list-item">Check in: <span className="list-item-data">{`After ${listing.check_in_time}`}</span></li>
          <li className="list-item">Check out: <span className="list-item-data">{`${listing.check_in_time} night`}</span></li>
          <li className="list-item">Cancellation policy: <span className="list-item-data">{listing.cancellation_policy}</span></li>
          <li className="list-item">Check out: <span className="list-item-data">{`Before ${listing.check_in_time}`}</span></li>
          <li className="list-item">Response time: <span className="list-item-data">{`Within ${listing.response_time}`}</span></li>
          <li className="list-item">Accepts Booking: <span className="list-item-data">{listing.booking_time}</span></li>
        </ul>
      </div>
      <div id="right"></div>
      <div>
        <button id='show-delete-button' onClick={()=>this.onDelete()}>delete listing</button>
      </div>
    </div>
  )
  }
}



export default ListingShow;