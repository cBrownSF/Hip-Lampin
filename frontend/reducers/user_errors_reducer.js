import { RECEIVE_USER,RECEIVE_USER_ERRORS,REMOVE_USER_ERRORS } from '../actions/user_actions'

const userErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState)

  switch (action.type) {
    
    case RECEIVE_USER_ERRORS:
      return action.errors
    case RECEIVE_USER:
    case REMOVE_USER_ERRORS:
      return []
    default:
      return oldState
  }
}

export default userErrorsReducer;