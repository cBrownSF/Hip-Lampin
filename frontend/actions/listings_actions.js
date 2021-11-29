import * as ListingAPIUtil from '../util/listing_api_util'

export const RECEIVE_ALL_LISTINGS = 'RECEIVE_ALL_LISTINGS'
export const RECEIVE_LISTING = 'RECEIVE_LISTING'
export const RECEIVE_LISTING_ERRORS = 'RECEIVE_LISTING_ERRORS'
export const REMOVE_LISTING = 'REMOVE_LISTING'
export const REMOVE_LISTING_ERRORS = 'REMOVE_LISTING_ERRORS'
 const receiveListings = listings => ({
  type: RECEIVE_ALL_LISTINGS,
  listings
})

const receiveOneListing = listing =>({
  type: RECEIVE_LISTING,
  listing
})
export const removeListing = listing =>({
  type: REMOVE_LISTING,
  listing
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

export const receiveListing = listingId => dispatch =>{
  return ListingAPIUtil.fetchListing(listingId)
    .then(listing => dispatch(receiveOneListing(listing)))
}
export const createListing = listing => dispatch =>{
  return ListingAPIUtil.createListing(listing)
  .then(createdlisting => dispatch(receiveOneListing(createdlisting)),
  (errors) => dispatch(receiveListingErrors(errors.responseJSON)))
}


export const updateListing = listing => dispatch =>{
  return ListingAPIUtil.updateListing(listing)
    .then(listing => dispatch(receiveOneListing(listing)))

    
}

export const deleteListing = listingId => dispatch =>{
  return ListingAPIUtil.deleteListing(listingId)
    .then(() => dispatch(removeListing(listingId))
    )
}
