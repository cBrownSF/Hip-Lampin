export const fetchListings = bounds => {
  debugger
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
  return $.ajax({
    url: `/api/listings/${listingId}`,
    method: "DELETE"
  })
}

export const createReview = (review) => {

  return $.ajax({
    method: 'POST',
    url: `/api/reviews`,
    data: { review }
  })
}
export const updateReview = (review) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${review.id}`,
    data: {review},
  })
}

export const deleteReview = (reviewId) => {
  return $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: "DELETE"
  })
}
