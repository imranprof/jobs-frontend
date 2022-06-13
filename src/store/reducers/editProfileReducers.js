import {HEADLINE_TEXT, HEADLINE_EDIT_MODE, INTRO_TEXT, EXPERTISE_VALUES, BIO_TEXT, BIO_EDIT_MODE, SOCIAL_LINKS_UPDATE} from "../actionTypes/editProfileTypes";
import {ProfileData} from "../../../API/mock/profile/profileData";

const initialState = {
  headline: ProfileData.headline,
  headlineMode: false,
  intro: ProfileData.intro,
  introMode: false,
  bio: ProfileData.bio,
  bioMode: false,
  expertises: ProfileData.expertises,
  links: ProfileData.socialLinks
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
    default:
      return state
  }
}
