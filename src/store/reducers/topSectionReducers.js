import {
  HEADLINE_TEXT,
  HEADLINE_EDIT_MODE,
  INTRO_TEXT,
  EXPERTISE_VALUES,
  BIO_TEXT,
  BIO_EDIT_MODE,
  SOCIAL_LINKS_UPDATE,
  SKILLS_VALUES,
  SET_PROFILE_ID,
  SET_NAME,
  SET_AVATAR, SET_LOADER
} from "../actionTypes/topSectionTypes";

const initialState = {
  id: null,
  firstName: "",
  lastName: "",
  headline: "",
  headlineMode: false,
  intro: "",
  introMode: false,
  bio: "",
  bioMode: false,
  avatar: null,
  expertises: [],
  links: {},
  skills: [],
  loader: true
}

export const topSectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case HEADLINE_TEXT:
      return {
        ...state,
        headline: action.payload,
      }
    case HEADLINE_EDIT_MODE:
      return {
        ...state,
        headlineMode: action.payload,
      }
    case INTRO_TEXT:
      return {
        ...state,
        intro: action.payload,
      }
    case EXPERTISE_VALUES:
      return {
        ...state,
        expertises: action.payload,
      }
    case BIO_TEXT:
      return {
        ...state,
        bio: action.payload,
      }
    case BIO_EDIT_MODE:
      return {
        ...state,
        bioMode: action.payload,
      }
    case SOCIAL_LINKS_UPDATE:
      return {
        ...state,
        links: action.payload,
      }
    case SKILLS_VALUES:
      return {
        ...state,
        skills: action.payload,
      }
    case SET_PROFILE_ID:
      return {
        ...state,
        id: action.payload
      }
    case SET_NAME:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      }
    case SET_AVATAR:
      return {
        ...state,
        avatar: action.payload
      }
    case SET_LOADER:
      return {
        ...state,
        loader: action.payload
      }
    default:
      return state
  }
}
