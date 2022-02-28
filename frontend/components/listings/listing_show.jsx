import React from 'react'
import { Link } from 'react-router-dom';
import { hashHistory } from 'react-router';
import CreateMap from './newmap';
import CreateReviewContainer from '../reviews/review_container'
import ReviewIndexItem from '../reviews/review_index_item_container'
import ReservationForm from '../reservations/create_reservation';
class ListingShow extends React.Component {
  constructor(props){
    super(props)
    this.state={
      count:0,
      hostFname:null,
      hostLname:null || '',
      photoURL:null,
      // startDate: new Date()
    }
    this.addToCount=this.addToCount.bind(this)
    this.subtractCount=this.subtractCount.bind(this)
    this.findHostAuthor=this.findHostAuthor.bind(this)
  }
  componentDidMount() {
    this.props.receiveListing(this.props.match.params.listingId).then((listing)=>{
      this.props.receiveUser(listing.listing.host_id).then((user)=>{
        return this.setState({
          hostFname: user.user.fname,
          hostLname: user.user.lname,
          photoURL: user.user.photoURL
        })
      })
    })
    // this.findHostAuthor()


    window.scrollTo(0, 0);
  }
  
  componentDidUpdate(prevState,nextState) {
    if (prevState !== nextState){
     
    }
  }
  componentWillUnmount(){
  
    this.props.clearReviews()
  }
  addToCount(){
    return this.setState((prevState)=>({
      count: prevState.count +1
    }))

  }
  subtractCount(){
    this.setState((prevState) => ({
      count: prevState.count -1
    }))   
  }
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
  percentRecommend(){
    const reviewIdArray = this.props.listing.reviewIds
   return (this.state.count / reviewIdArray.length) * 100
  }
  findHostAuthor(){

    const authorArray=this.props.authors
    const hostId = this.props.listing.host_id
    authorArray.map((author)=>{
      if (author.id === hostId){

        return this.setState({
          hostFname:author.fname,
          hostLname:author.lname,
          photoURL:author.photoURL
        })
      } 
    })
  }

render() {

 
  if (!this.props.listing){
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
  const listingId = this.props.match.params.listingId
  // this.findHostAuthor()
  return(
    <div className='main-div-show'>
     <div className="photo-container">
        <img className="show-images"src={listing.photos[0]} width="400" height = '200' alt="coverphoto" />
        <img className="show-images"src={listing.photos[1]} width="400" height = '200' alt="coverphoto2" />
        <img className="show-images"src={listing.photos[2]} width="400" height = '200' alt="coverphoto3" />
      </div>
    <div className='show-container'>
      {/* <div>
        {this.props.currentUser && this.props.currentUser.id === this.props.listing.host_id ? (
          <button id='show-delete-button' onClick={() => this.onDelete()}>delete listing</button>
        ) : ''}
      </div> */}
      {/* <p id="link-location"><Link id='show-link' to={photo}>Upload</Link></p> */}
      {/* <div className="photo-container">
        <img className="show-images"src={listing.photos[0]} width="400" height = '200' alt="coverphoto" />
        <img className="show-images"src={listing.photos[1]} width="400" height = '200' alt="coverphoto2" />
        <img className="show-images"src={listing.photos[2]} width="400" height = '200' alt="coverphoto3" />
      </div> */}
 
   
        {/* <div className='cost-show'>
          <p id="link-location">{isHost(cost)}</p>
          <div className='cost-per-night'>
          <span id="price">{`$${listing.cost}`}</span>
          <p id='per-night'>{`per night(${listing.guests_allowed} guests)`}</p>
          </div>
          <div className='check-in'>
          <button>Check In</button>
          <input type="date"
          

          />
          <div>
          <button>Check Out</button>
              </div>
          </div>
          <div className='request-div'>
          <button className='request-to-book'>Request to Book</button>
          </div>
        </div> */}
   
    
      <div className = 'name-show'>
          <div>
            {this.props.currentUser && this.props.currentUser.id === this.props.listing.host_id ? (
              <button id='show-delete-button' onClick={() => this.onDelete()}>delete listing</button>
            ) : <p id="link-location">{isHost(nameEdit)}</p>}
          </div>
        {/* <p id="link-location">{isHost(nameEdit)}</p> */}
        <h1 className="listing-title">{listing.name}</h1>
        <p id='nearby-show'>{`${listing.city}, ${listing.zip_code}`}</p>
            <p className={this.props.currentUser && this.props.currentUser.id === this.props.listing.host_id ? "review-number-logged-in":''}
              >{reviewIdArray.length ? `${this.percentRecommend()} % Recommended` : 'No reviews yet'}</p>
      </div>
        <div className="booking-box">
          <ReservationForm
            cost={Number(listing.cost)}
            guestsAllowed={listing.guests_allowed}
            currentUser={this.props.currentUser}
            listingId={listingId}
            openModal={this.props.openModal}
            sendResInfo={this.props.sendReservation}
            hostId={listing.host_id}
            minNight={listing.minimum_night}
          />
        </div>
      {/* <div className="recommended-show">
        <p>{reviewIdArray.length? `${this.percentRecommend()} % Recommended`: 'No reviews yet'}</p>
      </div> */}
      <div className="line-break">
        <hr id="solid" />
      </div>

        <p id="link-location">{isHost(descript)}</p>
      <div className= 'descript-show'>
        {/* <div>
        <p id="link-location">{isHost(descript)}</p>
        </div> */}
        <img className="show-prof-img" src={this.state.photoURL}/>   
        <div className='host-div'>
        <span className="host-by"> Hosted by</span>
        <div className="host-prof-show-div">
        <Link to={`/profile/${this.props.listing.host_id}`} className="host-link-show">{this.state.hostFname} {this.state.hostLname[0]}.</Link>
          </div>
        </div>     
        <p className='description'>{listing.description}</p>
       
      </div>
      
      <div className='box-show-page'>
      <div id= 'activities-show'>
        <p id="link-location">{isHost(amenities)}</p>
          <p id='headers'>Amenities</p>
          <div className='flex-act-div'>
            <div className='inner-div-essent'>
            <li id="text-icons">{`Showers ${this.updatedProps(listing.is_shower)}`}</li>
            <i className="fas fa-shower"></i>
          </div>
            <div className='inner-div-essent'>
          <li id="text-icons">{`Wifi ${this.updatedProps(listing.is_wifi)}`}</li>
          <i className="fas fa-wifi"></i>
            </div>
            <div className='inner-div-essent'>
              <li id="text-icons">{`Picnic tables ${this.updatedProps(listing.is_picnic_table)}`}</li>
              <i class="fas fa-campground"></i>
            </div>
            <div className='inner-div-essent'>
              <li id="text-icons">{`Kitchen ${this.updatedProps(listing.is_kitchen)}`}</li>
              <i class="fas fa-sink"></i>
            </div>
      </div>
        </div>
        <div id='activities-show'>
          <p id="link-location">{isHost(amenities)}</p>
          <p id='headers'>Essentials</p>
          <div className='flex-act-div'>
            <div className='inner-div-essent'>
              <li id="text-icons">{`Trash cans are ${this.updatedProps(listing.is_trash)}`}</li>
              <i class="fas fa-trash-alt"></i>
            </div>
            <div className='inner-div-essent'>
              <li id="text-icons">{`Toilet is ${this.updatedProps(listing.is_toilet)}`}</li>
              <i class="fas fa-toilet-paper"></i>
            </div>
            <div className='inner-div-essent'>
              <li id="text-icons">{`Campfires are ${this.updatedProps(listing.is_campfire_allowed)}`}</li>
              <i class="fas fa-fire"></i>
            </div>
       </div>
        </div>
        <div id='activities-show'>
          <p id="link-location">{isHost(activities)}</p>
          <p id='headers'>Activities</p>
          <div className='flex-act-div'>
          {/* <ul className='list-show-page-icons'> */}
            {//fix this later and make sure ! is correct// 
}

            <div className='activities-list-div'>
              {listing.is_hiking ? (
                <div className="inner-div-act">
                  <li id='text-icons'>Hiking</li>
                  <i className="fas fa-hiking"></i>
                </div>
              ) : (
                <div className="inner-div-act">
                  <li id='text-icons-no'>No Hiking nearby</li>
                  <i className="fas fa-hiking" style={{ color: 'grey' }}></i>
                </div>
              )}
            </div >
            <div className='activities-list-div'>
              {listing.is_swimming ? (
                <div className="inner-div-act">
                  <li id='text-icons'>Swimming</li>
                  <i className="fas fa-swimmer"></i>
                </div>
              ) : (
                <div className="inner-div-act">
                  <li id='text-icons-no'>No Swimming Area</li>
                  <i className="fas fa-swimmer" style={{ color: 'grey' }}></i>
                </div>
              )}
            </div >
            <div className='activities-list-div'>
              {listing.is_paddling ? (
                <div className="inner-div-act">
                  <li id='text-icons'>Paddling</li>
                  <i className="fas fa-water"></i>
                </div>
              ) : (
                <div className="inner-div-act">
                  <li id='text-icons-no'>No Paddling Area</li>
                    <i className="fas fa-water" style={{ color: 'grey' }}></i>
                </div>
              )}
            </div >
            <div className='activities-list-div'>
              {listing.is_wildlife ? (
                <div className="inner-div-act">
                  <li id='text-icons'>Wildlife</li>
                  <i className="fas- fa-binoculars"></i>
                </div>
                ):(
              <div className="inner-div-act">
                <li id='text-icons'>Urban Setting</li>
                <i className="fas fa-building"></i>
              </div>
                )}
            </div>
            <div className='activities-list-div'>
              {listing.is_fishing ? (
                <div className="inner-div-act">
              <li id='text-icons'>Fishing</li>
              <i className="fas fa-fish"></i>
                </div>
              ):(
                  <div className="inner-div-act">
                    <li id='text-icons-no'>Fishing is unavailable</li>
                    <i className="fas fa-fish" style={{color: 'grey'}}></i>
                  </div>
              )}
            </div>
          </div>
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
          styling='show-map-prop'
        />
      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="line-break">
        <hr id="solid" />
      </div>

      <div className="review-index-item-show">
        {reviews.length === 0 ? (
            <div className="no-review-num-review">No reviews yet</div>
        ) : (
          <div className="review-index-item-array-show-div">
                {reviews.length === 1 ? <div className="no-review-num-review">{`${reviews.length} Review`}</div> : <div>{`${reviews.length} Reviews`}</div>}
            </div>
                )}
        </div>
      <div className="review-form-listing-show-div-not-sign-in" >
          {this.props.currentUser && this.props.currentUser.id !== listing.host_id?(
            <div className='div-holding-review-form'>
            {reviews.some((review) => this.props.currentUser.id === review.author_id) ? <div className="review-already-added">You have already added a review</div> : (
                <CreateReviewContainer
                  listing={this.props.listing}
                  listingId={this.props.listing.id}
                />)}
            </div>
          ):(
          <div>
              {this.props.currentUser && this.props.currentUser.id === listing.host_id ? (
               <div className="review-form-listing-show-div" >
            <div className='div-holding-not-signed-in'>
                    <div className='signed-out-review-must'>You cannot review your own listing</div>
                </div>
                </div>):(
          <div className="review-form-listing-show-div" >
            <div className='div-holding-not-signed-in'>
              <div className='signed-out-review-must'>You must be signed in to add a review</div>
              <div className="div-not-signed-in-show">
                <button 
                    className="green-sign-up-button"
                onClick={() => this.props.openModal('login')}>Log in</button>
                <button 
                    className="green-sign-up-button"
                onClick={() => this.props.openModal('signup')}>Sign up</button>
              </div>
            </div>
            </div>)}
            </div>
          )}
      </div>
            <div className="review-index-item-array-show">
                  {reviews.map((review) => {
                    if (reviewIdArray.includes(review.id)) {
                      
                      return(
                      <ReviewIndexItem
                        review={review}
                        authorId={review.author_id}
                        key={review.id}
                        currentUser={this.props.currentUser}
                        count={this.addToCount}
                        subCount={this.subtractCount}
                      />
                      )
                    }
                  })
                  }
            </div>
    </div>
  </div>
  )}
}


export default ListingShow;