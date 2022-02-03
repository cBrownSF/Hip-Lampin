import { $CombinedState } from "redux"

export const recieveReview = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/reviews/${id}`
  })
}