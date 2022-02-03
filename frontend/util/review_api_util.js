import { $CombinedState } from "redux"

export const recieveListing = id => {
  return $CombinedState.ajax({
    method: 'GET',
    url: `/api/reviews/${id}`
  })
}