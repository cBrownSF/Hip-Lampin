export const fetchListings = bounds => {
  return $.ajax({
    url: '/api/listings',
    method: 'GET',
    bounds
  })
}

export const fetchListing = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/listings/${id}`
  })
}

export const createListing = (listing) => {
  debugger;
  return $.ajax({
    url: `/api/listings`,
    method: "POST",
    data: listing ,
    contentType: false,
    processData: false
  })
}

export const updateListing = (listing) => {

  return $.ajax({
    url: `/api/listings/${listing.get('listing[id]')}`,
    method: 'PATCH',
    data: listing,
    contentType: false,
    processData: false
  })
}

export const deleteListing = (listingId) => {
  debugger;
  return $.ajax({
    url: `/api/listings/${listingId}`,
    method: "DELETE"
  })
}