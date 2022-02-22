import * as UserUtil from '../util/user_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS='RECEIVE_USER_ERRORS'
export const REMOVE_USER_ERRORS='REMOVE_USER_ERRORS'

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})
const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
})
export const removeUserErrors= ()=>({
  type: REMOVE_USER_ERRORS
})
export const updateUserInfo = user => dispatch => {
  return UserUtil.updateUser(user)
    .then(user => dispatch(receiveUser(user)),
      (errors) => dispatch(receiveUserErrors(errors.responseJSON)))
}

export const receiveOneUser = id => dispatch => {
  return UserUtil.fetchUser(id)
    .then(user => dispatch(receiveUser(user)))
}
