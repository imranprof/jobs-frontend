import {RESUME_UPDATE, RESUME_ITEM_REMOVE, GET_RESUME, GET_ALL_SKILLS} from "../actionTypes/resumeTypes";
import {getProfileSlug} from "./authReducers";
import {ProfileData} from "../../../API/mock/profile/profileData";

const initialState = () => {
  if (getProfileSlug())
    return {
      resume: {
        educations: [],
        skills: [],
        experiences: [],
      },
      allSkills: []
    }
  else return {
    resume: {
      educations: ProfileData.resume.education,
      skills: ProfileData.resume.skills,
      experiences: ProfileData.resume.experience,
    },
    allSkills: []
  }
}

export const resumeReducers = (state = initialState(), action) => {
  switch (action.type) {
    case GET_RESUME:
      return {
        ...state,
        ...action.payload,
      }
    case RESUME_UPDATE:
      return {
        ...state,
        resume: action.payload,
      }
    case RESUME_ITEM_REMOVE:
      return {
        ...state,
        resume: action.payload,
      }
    case GET_ALL_SKILLS:
      return {
        ...state,
        allSkills: action.payload
      }
    default:
      return state
  }
}
