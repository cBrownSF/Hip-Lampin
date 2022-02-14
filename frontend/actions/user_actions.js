import * as UserUtil from '../util/user_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

export const updateUserInfo = user => dispatch => {
  return APIUtil.updateUser(user)
    .then(user => dispatch(receiveUser(user)),
      (errors) => dispatch(receiveUserErrors(errors.responseJSON)))
}

export const updateUserInfo = user => dispatch => {
  return APIUtil.fetchUser(user)
    .then(user => dispatch(receiveUser(user)),
      (errors) => dispatch(receiveUserErrors(errors.responseJSON)))
}