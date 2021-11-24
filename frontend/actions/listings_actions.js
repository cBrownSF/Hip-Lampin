import * as ListingAPIUtil from '../util/listing_api_util'

export const RECEIVE_ALL_LISTINGS = 'RECEIVE_ALL_LISTING'
export const RECEIVE_LISTING = 'RECEIVE_LISTING'

const receiveListings = (listings) => ({
  type: 'RECEIVE_ALL_LISTING',
  listings
})

const receiveListing = (listing) =>({
  type: "RECEIVE_LISTING",
  listing
})


export const receiveAllListings = () =>dispatch =>{
  return ListingAPIUtil.fetchListings()
  .then((listings) => dispatch(receiveListings(listings)))
}

export const createListing = listing =>dispatch =>{
  return ListingAPIUtil.createListing(listing)
  .then((createdlisting) => dispatch(receiveListing(createdlisting)))
}

