import * as ListingAPIUtil from '../util/listing_api_util'

export const RECEIVE_ALL_LISTING = 'RECEIVE_ALL_LISTING'
export const RECEIVE_LISTING = 'RECEIVE_LISTING'
export const RECEIVE_LISTING_ERRORS = 'RECEIVE_LISTING_ERRORS'

const receiveListings = listings => ({
  type: RECEIVE_ALL_LISTING,
  listings
})

const receiveListing = listing =>({
  type: RECEIVE_LISTING,
  listing
})

const receiveListingErrors = errors => ({
  type: RECEIVE_LISTING_ERRORS,
  errors
})

export const receiveAllListings = () =>dispatch =>{
  return ListingAPIUtil.fetchListings()
  .then((listings) => dispatch(receiveListings(listings)),
    (errors) => dispatch(receiveListingErrors(errors.responseJSON)))
}

export const createListing = listing => dispatch =>{
  return ListingAPIUtil.createListing(listing)
  .then((createdlisting) => dispatch(receiveListing(createdlisting)),
    (errors) => dispatch(receiveListingErrors(errors.responseJSON)))
}

