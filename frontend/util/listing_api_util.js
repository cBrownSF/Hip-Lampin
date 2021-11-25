export const fetchListings = () => {
  return $.ajax({
    url: '/api/listings',
    method: 'GET'
  })
}

export const fetchListing = listingId => {
  return $.ajax({
    url: `/api/listings/${listingId}`,
    method: 'GET'
  })
}

export const createListing = (listing) => {
  return $.ajax({
    url: `/api/listings`,
    method: "POST",
    data: { listing }
  })
}

export const updateListing = (listing) => {
  return $.ajax({
    url: `/api/listings/${listing.id}`,
    method: "PATCH",
    data: { listing }
  })
}

export const deleteListing = (listingId) => {
  return $.ajax({
    url: `/api/listings/${listingId}`,
    method: "Delete"
  })
}