import axios from "axios";
import {
  AUTHENTICATED,
  MODAL_TYPE,
  SIGN_IN_REQUESTED,
  SIGN_IN_RECEIVED,
  SIGN_IN_REJECTED
} from "../actionTypes/authTypes";

const getToken = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
    }
    return Boolean(token)
  }
}

const getUserID = () => {
  if (typeof window !== 'undefined') {
    const userID = localStorage.getItem('userID')
    if (userID) {
      return userID;
    }
    return null;
  }
}

const initialState = {
  userID: getUserID(),
  isAuthenticated: getToken(),
  modalType: '',
  loading: false,
  error: '',
}

export const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: getToken(),
        userID: getUserID()
      }
    case MODAL_TYPE:
      return {
        ...state,
        modalType: action.payload
      }
    case SIGN_IN_REQUESTED:
      return {...state, loading: true};
    case SIGN_IN_RECEIVED:
      return {...state, loading: false, error: ''};
    case SIGN_IN_REJECTED:
      return {...state, loading: false, error: action.error};
    default:
      return state
  }
}
