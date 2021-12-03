import * as ListingAPIUtil from '../util/listing_api_util'
import { hashHistory } from 'react-router';
export const RECEIVE_ALL_LISTINGS = 'RECEIVE_ALL_LISTINGS'
export const RECEIVE_LISTING = 'RECEIVE_LISTING'
export const RECEIVE_LISTING_ERRORS = 'RECEIVE_LISTING_ERRORS'
export const REMOVE_LISTING = 'REMOVE_LISTING'
export const REMOVE_LISTING_ERRORS = 'REMOVE_LISTING_ERRORS'
 

const receiveListings = listings => ({
  type: RECEIVE_ALL_LISTINGS,
  listings
})

export const receiveOneListing = listing =>({
  type: RECEIVE_LISTING,
  listing
})
export const removeListing = listingId =>({
  type: REMOVE_LISTING,
  listingId
})
const receiveListingErrors = errors => ({
  type: RECEIVE_LISTING_ERRORS,
  errors
})
export const removeListingErrors = () => ({
  type: REMOVE_LISTING_ERRORS
})

export const receiveAllListings = () =>dispatch =>{
  return ListingAPIUtil.fetchListings()
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

     hashHistory.push(`/listings/${createdListing.id}`)
   
  }),
  (errors) => dispatch(receiveListingErrors(errors.responseJSON))
}


export const updateListing = listing => (dispatch) =>{
  return ListingAPIUtil.updateListing(listing)
    .then(listing => {
      dispatch(receiveOneListing(listing))
      hashHistory.push(`/listings/${listing.id}`)
    })
}

export const deleteListing = listingId => dispatch =>{
  return ListingAPIUtil.deleteListing(listingId)
    .then(() => {
    dispatch(removeListing(listingId))
      hashHistory.push(`/`)
    })
}
