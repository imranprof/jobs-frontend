import {AUTHENTICATED, MODAL_TYPE, SIGN_IN_RECEIVED, SIGN_IN_REQUESTED, SIGN_IN_REJECTED} from "../actionTypes/authTypes";

export const authenticate = ({userID, authenticate}) => {
  return {
    type: AUTHENTICATED,
    payload: {userID, authenticate}
  }
}

export const modalType = (type) => {
  return {
    type: MODAL_TYPE,
    payload: type
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
