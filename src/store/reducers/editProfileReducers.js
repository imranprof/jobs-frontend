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
  FEATURES_UPDATE,
  FEATURES_REMOVE, SET_NAME,
} from "../actionTypes/editProfileTypes";
import {ProfileData} from "../../../API/mock/profile/profileData";

const {headline, intro, bio, expertises, socialLinks, skills, features} = ProfileData;

const initialState = {
  id: null,
  firstName: null,
  lastName: null,
  headline: null,
  headlineMode: false,
  intro: null,
  introMode: false,
  bio: null,
  bioMode: false,
  expertises: [],
  links: {},
  skills: [],
  features: features
}

// ***TopSection***
export const editProfileReducer = (state = initialState, action) => {
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
    case FEATURES_UPDATE:
      return {
        ...state,
        features: action.payload,
      }
    case FEATURES_REMOVE:
      return {
        ...state,
        features: action.payload,
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
    default:
      return state
  }
}
