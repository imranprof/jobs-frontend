import {
  HEADLINE_TEXT,
  HEADLINE_EDIT_MODE,
  INTRO_TEXT,
  EXPERTISE_VALUES,
  BIO_TEXT,
  BIO_EDIT_MODE,
  SOCIAL_LINKS_UPDATE,
  SKILLS_VALUES
} from "../actionTypes/editProfileTypes";
import {ProfileData} from "../../../API/mock/profile/profileData";

const {headline, intro, bio, expertises, socialLinks, skills} = ProfileData;
const initialState = {
  headline: headline,
  headlineMode: false,
  intro: intro,
  introMode: false,
  bio: bio,
  bioMode: false,
  expertises: expertises,
  links: socialLinks,
  skills: skills
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
    default:
      return state
  }
}
