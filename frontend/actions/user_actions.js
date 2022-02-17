import * as UserUtil from '../util/user_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
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
