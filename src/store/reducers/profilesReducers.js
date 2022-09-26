import {SHOW_PROFILES, SET_PAGE, RESET, SET_PROFILES} from "../actionTypes/profilesTypes";

const initialState = {
  initialLoader: true,
  page: 0,
  profiles: [],
  set: true,
  searchProfiles: []
}

export const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        initialLoader: false,
      }
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      }
    case RESET:
      return {
        ...state,
        set: action.payload
      }
    case SET_PROFILES:
      return {
        ...state,
        searchProfiles: action.payload,
        initialLoader: false
      }
    default:
      return state
  }
}
