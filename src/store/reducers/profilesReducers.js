import {SHOW_PROFILES, SET_PAGE} from "../actionTypes/profilesTypes";

const initialState = {
  initialLoader: true,
  page: 0,
  profiles: []
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
    default:
      return state
  }
}
