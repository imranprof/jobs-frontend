import axios from "axios";
import {AUTHENTICATED, MODAL_TYPE} from "../actionTypes/authTypes";

const getToken = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
    }
  return Boolean(token)
  }
}

const initialState = {
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
        isAuthenticated: getToken()
      }
    case MODAL_TYPE:
      return {
        ...state,
        modalType: action.payload
      }
    default:
      return state
  }
}
