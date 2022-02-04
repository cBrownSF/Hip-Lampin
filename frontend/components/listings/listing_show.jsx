import React from 'react'
import { Link } from 'react-router-dom';
import { hashHistory } from 'react-router';
import CreateMap from './newmap';
import CreateReviewContainer from '../reviews/review_container'
import ReviewIndexItem from '../reviews/review_index_item_container'
class ListingShow extends React.Component {

  componentDidMount() {
    this.props.receiveListing(this.props.match.params.listingId);
    window.scrollTo(0, 0);
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
    debugger;
    return null;
  }
  const listing = this.props.listing
  
  const descript = {
    pathname: `/listings/${this.props.listing.id}/edit`,
    state: 2
  }
  const amenities = {
    pathname: `/listings/${this.props.listing.id}/edit`,
    state: 4
  }
  const cost = {
    pathname: `/listings/${this.props.listing.id}/edit`,
        state: 3,
  }
  const nameEdit = {
    pathname: `/listings/${this.props.listing.id}/edit`,
    state: 1
  }
  const activities = {
    pathname: `/listings/${this.props.listing.id}/edit`,
    state: 5
  }
  const details = {
    pathname: `/listings/${this.props.listing.id}/edit`,
    state: 6
  }
  const checkIn = {
    pathname: `/listings/${this.props.listing.id}/edit`,
    state: 11
  }
  const photo = {
    pathname: `/listings/${this.props.listing.id}/edit`,
    state: 9
  }
  const isHost= (link)=>{
    if (this.props.currentUser && this.props.currentUser.id === this.props.listing.host_id) {
    return <span id="link-location"><Link id='show-link' to={link}>Edit</Link></span>
  } else {
    return <span> </span>
  }
}
  const reviews=this.props.reviews
  const reviewIdArray=this.props.listing.reviewIds
  console.log(this.props)
debugger
  return(
   
    <div className='show-container'>
      <p id="link-location"><Link id='show-link' to={photo}>Upload</Link></p>
      <div className="photo-container">
        <img className="show-images"src={listing.photos[0]} width="400" height = '200' alt="coverphoto" />
        <img className="show-images"src={listing.photos[1]} width="400" height = '200' alt="coverphoto2" />
      </div>
 
    
      <div className = 'name-show'>
        <p id="link-location">{isHost(nameEdit)}</p>
        <h1 className="listing-title">{listing.name}</h1>
        <p id='nearby-show'>{`${listing.city}, ${listing.zip_code}`}</p>

         
      </div>
      <div className="recommended-show">
        <p>100% recommended</p>
        <p>save</p>
      </div>
      <div className="line-break">
        <hr id="solid" />
      </div>

      <div className="booking-box">
        <div className='cost-show'>
          <p id="link-location">{isHost(cost)}</p>
          <span id="price">{`$${listing.cost}`}</span>
          <p id='per-night'>{`per night(${listing.guests_allowed} guests)`}</p>
          <div className='check-in'>
          <button>Check In</button><button>Check Out</button>
          
          </div>
          <button>Request to Book</button>
        </div>
      </div>
     
      <div className= 'descript-show'>
        <p id="link-location">{isHost(descript)}</p>
        <p>Host pic</p>
        <p>Host Name</p>
        <p>{listing.description}</p>
      </div>
      
      <div className='box-show-page'>
      <div id= 'activities-show'>
        <p id="link-location">{isHost(amenities)}</p>
          <p id='headers'>Amenities</p>
        <ul className='list-show-page'>
            {console.log(listing.is_trash)}
          <li id="text">{`Showers ${this.updatedProps(listing.is_shower)}`}</li>
          <li id="text">{`Wifi ${this.updatedProps(listing.is_wifi)}`}</li>
          <li id="text">{`Picnic tables ${this.updatedProps(listing.is_picnic_table)}`}</li>
          <li id="text">{`Kitchen ${this.updatedProps(listing.is_kitchen)}`}</li>
        </ul>
        </div>
        <div id='activities-show'>
          <p id="link-location">{isHost(amenities)}</p>
          <p id='headers'>Essentials</p>
          <ul className='list-show-page'>
            <li id="text">{`Trash cans are ${this.updatedProps(listing.is_trash)}`}</li>
            <li id="text">{`Toilet is ${this.updatedProps(listing.is_toilet)}`}</li>
            <li id="text">{`Campfires are ${this.updatedProps(listing.is_campfire_allowed)}`}</li>
          </ul>
        </div>
        <div id='activities-show'>
          <p id="link-location">{isHost(activities)}</p>
          <p id='headers'>Activities</p>
          {console.log(listing.is_hiking)}
          <ul className='list-show-page'>
            {//fix this later and make sure ! is correct// 
}
            <li id='text'>{!listing.is_hiking? "Hiking":""}</li>
            <li id='text'>{!listing.is_swimming? "Swimming":""}</li>
            <li id='text'>{listing.is_paddling? "Paddling":""}</li>
            <li id='text'>{!listing.is_wildlife? "Wildlife":""}</li>
            <li id='text'>{listing.is_fishing? "Fishing":""}</li>

          </ul>
        </div>
        
      </div>
      
      <div className="line-break">
        <hr id="solid" />
      </div>
   
      <div className="details-show">
        <p id="link-location">{isHost(details)}</p>
        <div className="detail-title-show">
          <p className="detail-header">Details</p>
        </div>
        <div>
          <ul className='list-show-page'>
          <li id="list-item">Check in: <span className="list-item-data">{`After ${listing.check_in_time}`}</span></li>
          <li id="list-item">Check out: <span className="list-item-data">{`Before ${listing.check_out_time}`}</span></li>
          <li id="list-item">Cancellation policy: <span className="list-item-data">{listing.cancellation_policy}</span></li>
          <br/>
          <li id="list-item">Response time: <span className="list-item-data">{`Within ${listing.response_time}`}</span></li>
        </ul>
        </div>
        <div>
          <ul className='list-show-page'>
            <li id="list-item">On arrival: <span className="list-item-data">{listing.on_arrival}</span></li>
            <li id="list-item">Minimum nights: <span className="list-item-data">{listing.minimum_night}</span></li>
            <li id="list-item">Accepts Booking: <span className="list-item-data">{listing.booking_time}</span></li>
            <br/>
            <li id="list-item">Guests Allowed: <span className="list-item-data">{listing.guests_allowed}</span></li>
          </ul>
        </div>
        <div>
        <hr id="solid" />
        </div>
      </div>
      <div className="line-break">
        <hr id="solid" />
      </div>
      <div className ="show-map">
        <div className='location'>Location on map</div>
        <CreateMap
          lat={this.props.listing.lat}
          lng={this.props.listing.lng}
          zip={this.props.listing.zip_code}
          city={this.props.listing.city}
          state={this.props.listing.state}
          address={this.props.listing.street_address}
          styling='show-map'
        />
      </div>
      <div>
        {this.props.currentUser && this.props.currentUser.id === this.props.listing.host_id?(
        <button id='show-delete-button' onClick={()=>this.onDelete()}>delete listing</button>
        ) :''}
      </div>
      <div >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <CreateReviewContainer
          listing={this.props.listing}
          listingId={this.props.listing.id}
        />
      </div>
      <div>
        {console.log(reviews)}
        {reviews.length === 0 ? (
          <div>
            <p>No reviews yet</p>
          </div>
        ) : (
          <div>
            <h1><p>Reviews</p></h1>
            <ul>
              {reviews.map((review) => {
               if(reviewIdArray.includes(review.id)) {
                <ReviewIndexItem
                  review={review}
                />
               }})
               }
            </ul>
          </div>
        )}
    </div>
  </div>
  )
  }
}


export default ListingShow;