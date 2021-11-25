export const fetchListings = () => {
  return $.ajax({
    url: '/api/listings',
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