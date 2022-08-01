import {
  AUTHENTICATED,
  MODAL_TYPE,
  SIGN_IN_RECEIVED,
  SIGN_IN_REQUESTED,
  SIGN_IN_REJECTED,
  SET_PROFILE_SLUG
} from "../actionTypes/authTypes";

export const authenticate = ({authenticate}) => {
  return {
    type: AUTHENTICATED,
    payload: {authenticate}
  }
}

export const modalType = (type) => {
  return {
    type: MODAL_TYPE,
    payload: type
  }
}

export const setProfileSlug = (profileSlug) => {
  return {
    type: SET_PROFILE_SLUG,
    payload: profileSlug
  }
}

/* ****** Sign In Actions ****** */
export function signInRequested() {
  return { type: SIGN_IN_REQUESTED };
}
export function signInReceived() {
  return { type: SIGN_IN_RECEIVED };
}
export function signInRejected(error) {
  return { type: SIGN_IN_REJECTED, error };
}
