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
    }
  }
  
  updatedProps(word){
    return word === true ? 'available': 'unavailable'
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
      <div id = "show-photo">
        <img src={listing.photoURL} height="200px" width="200px" alt="screenshot" />
      </div>

      
      <div id="left"></div>
      <div id = 'name-show'>
        <h1>{listing.name}</h1>
          <Link id = 'show-Link'to={nameedit}>Edit</Link>
          <p id = 'nearby-show'>Nearby: Golden Gate Bridge</p>
          <hr className="solid" />
      </div>
      <div id='cost-show'>
        <h2>{listing.cost}</h2>
        <Link to={cost}>Cost Edit</Link>
      </div>
      <div id="left"></div>
      <div id= 'descript-show'>
        <Link id='show-Link'to={descript}>Edit</Link>
        <h2>{listing.description}</h2>
      </div>
      <div id="right"></div>
      {/* <div>
        <li className="list-item">{listing.guests_allowed}</li>
      </div> */}

      <div id="left"></div>
        <div id= 'amenities-show'>
          <h2>Amenities</h2>
        
          <Link id='show-Link' to={amenities}>Amen Edit</Link>
            <p>{`Trash bins ${this.updatedProps(listing.is_trash)}`}</p>
            <p>{`Showers ${this.updatedProps(listing.is_shower)}`}</p>
            <p>{`Wifi ${this.updatedProps(listing.is_wifi)}`}</p>
            <p>{`Picnic tables ${this.updatedProps(listing.is_picnic_table)}`}</p>
        </div>

        <div id = 'essentials-show'> 
          <h2>Essentials</h2>
          <Link id='show-Link' to={amenities}>Amen Edit</Link>
        </div>

        <div id='activities-show'>
          <span>Activities</span>
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
        <button id='show-delete-button' onClick={()=>this.onDelete()}>button</button>
      </div>
    </div>
  )
  }
}



export default ListingShow;