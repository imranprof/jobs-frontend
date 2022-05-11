import {AUTHENTICATED, MODAL_TYPE} from "../actionTypes/authTypes";

export const authenticate = (boolean) => {
  return {
    type: AUTHENTICATED,
    payload: boolean
  }
}

export const modalType = (str) => {
  return {
    type: MODAL_TYPE,
    payload: str
  }
}
