import {RESUME_UPDATE, RESUME_ITEM_REMOVE, GET_RESUME, GET_ALL_SKILLS} from "../actionTypes/resumeTypes";

const initialState = {
  resume: {
    educations: [],
    skills: [],
    experiences: [],
  },
  allSkills: []
}

export const resumeReducers = (state = initialState, action) => {
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
