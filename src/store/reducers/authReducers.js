import axios from "axios";
import {
  AUTHENTICATED,
  MODAL_TYPE,
  SIGN_IN_REQUESTED,
  SIGN_IN_RECEIVED,
  SIGN_IN_REJECTED, SET_PROFILE_SLUG
} from "../actionTypes/authTypes";
import {setProfileSlug} from "../../auth/operations";

const getToken = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
    }
    return Boolean(token)
  }
}

export const getProfileSlug = () => {
  if (typeof window !== 'undefined') {
    const profileSlug = localStorage.getItem('profileSlug')
    if (profileSlug) {
      return profileSlug;
    }
    return null;
  }
}

const initialState = {
  profileSlug: getProfileSlug(),
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
        profileSlug: getProfileSlug()
      }
    case MODAL_TYPE:
      return {
        ...state,
        modalType: action.payload
      }
    case SET_PROFILE_SLUG:
      setProfileSlug(action.payload)
      return {
        ...state,
        profileSlug: action.payload
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
