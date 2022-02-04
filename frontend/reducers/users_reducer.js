import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_REVIEW,RECEIVE_LISTING } from '../actions/listings_actions'

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState)

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
     return Object.assign({}, oldState, { [action.user.id]: action.user })
    case RECEIVE_REVIEW:
      return Object.assign({}, oldState, { [action.author.id]: action.author });
    case RECEIVE_LISTING:
      return Object.assign({}, oldState, action.authors);
    default:
      return oldState
  }
}

export default usersReducer;