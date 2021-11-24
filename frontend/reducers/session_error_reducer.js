import { RECEIVE_SESSION_ERRORS, REMOVE_SESSION_ERRORS } from '../actions/session_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullErrors = []
const sessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
    case REMOVE_SESSION_ERRORS:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;