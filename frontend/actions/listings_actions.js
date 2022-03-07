import * as ListingAPIUtil from '../util/listing_api_util'
import { hashHistory } from 'react-router';
export const RECEIVE_ALL_LISTINGS = 'RECEIVE_ALL_LISTINGS'
export const RECEIVE_LISTING = 'RECEIVE_LISTING'
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS'
export const RECEIVE_LISTING_ERRORS = 'RECEIVE_LISTING_ERRORS'
export const REMOVE_LISTING = 'REMOVE_LISTING'
export const REMOVE_LISTING_ERRORS = 'REMOVE_LISTING_ERRORS'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const REMOVE_REVIEW = 'REMOVE_REVIEW'
export const REMOVE_REVIEW_ERRORS='REMOVE_REVIEW_ERRORS'

const receiveListings = listings => ({
  type: RECEIVE_ALL_LISTINGS,
  listings
})

export const receiveOneListing = ({listing,reviews,authors}) =>({
  type: RECEIVE_LISTING,
  listing,
  reviews,
  authors
})
export const removeListing = listingId =>({
  type: REMOVE_LISTING,
  listingId
})
export const removeReview = reviewId =>({
  type: REMOVE_REVIEW,
  reviewId
})
const receiveListingErrors = errors => ({
  type: RECEIVE_LISTING_ERRORS,
  errors
})
export const removeListingErrors = () => ({
  type: REMOVE_LISTING_ERRORS
})

export const removeReviewErrors = () => ({
  type: REMOVE_REVIEW_ERRORS
})

 const receiveReviewErrors = errors => {
return{
  type: RECEIVE_REVIEW_ERRORS,
  errors
}
}

export const receiveOneReview = ({review,author})=> ({
  
  type: RECEIVE_REVIEW,
  review,
  author
})

export const receiveAllListings = bounds =>dispatch =>{
  return ListingAPIUtil.fetchListings(bounds)
  .then(listings => dispatch(receiveListings(listings)))
}

export const receiveListing = id => dispatch =>{
  return ListingAPIUtil.fetchListing(id)
    .then(listing => dispatch(receiveOneListing(listing)))
}

export const createListing = listing => (dispatch) =>{
  return ListingAPIUtil.createListing(listing)
  .then(createdListing => {
    
    dispatch(receiveOneListing(createdListing))
    hashHistory.push(`/listings/${Object.values(createdListing)[0].id}`)
   
  }),
  (errors) => dispatch(receiveListingErrors(errors.responseJSON))
}

export const createReview = review => (dispatch) => {
  return ListingAPIUtil.createReview(review)
    .then(createdReview => dispatch(receiveOneReview(createdReview)),
    (errors) => dispatch(receiveReviewErrors(errors.responseJSON)))
}
export const updateReview = review => (dispatch) => {
  return ListingAPIUtil.updateReview(review)
    .then(updatedReview => {
      dispatch(receiveOneReview(updatedReview))
    })
}
export const updateListing = listing => (dispatch) =>{
  return ListingAPIUtil.updateListing(listing)
    .then(listing => {
      dispatch(receiveOneListing(listing))
      hashHistory.push(`/listings/${Object.values(listing)[0].id}`)
    })
}

export const deleteListing = listingId => dispatch =>{
  return ListingAPIUtil.deleteListing(listingId)
  .then(()=>{
    dispatch(removeListing(listingId))
  })
}




export const deleteReview = reviewId=> (dispatch)=>{
  return ListingAPIUtil.deleteReview(reviewId)
  .then(()=>{
    dispatch(removeReview(reviewId))
  })
}