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
  SET_AVATAR
} from "../actionTypes/topSectionTypes";
import {getProfileSlug} from "./authReducers";
import {ProfileData} from "../../../API/mock/profile/profileData"

const {firstName, lastName, headline, intro, bio, expertises, socialLinks, skills, avatar} = ProfileData;
const initialState = () => {
  if (getProfileSlug()) {
    return {
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
    }
  } else {
    return {
      id: null,
      firstName: firstName,
      lastName: lastName,
      headline: headline,
      headlineMode: false,
      intro: intro,
      introMode: false,
      bio: bio,
      bioMode: false,
      avatar: avatar,
      expertises: expertises,
      links: socialLinks,
      skills: skills,
    }
  }
}

export const topSectionReducer = (state = initialState(), action) => {
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
    default:
      return state
  }
}
