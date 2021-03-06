import { deleteSession, postSession, postUser } from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
}

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors.responseJSON
  }
}

export const login = user => dispatch => postSession(user)
  .then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveErrors(err)));

export const signup = user => dispatch => postUser(user)
  .then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveErrors(err)));

export const logout = () => dispatch => deleteSession()
  .then(() => dispatch(logoutCurrentUser()));

