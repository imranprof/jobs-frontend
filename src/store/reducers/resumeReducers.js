import {RESUME_UPDATE, RESUME_ITEM_REMOVE, GET_RESUME} from "../actionTypes/resumeTypes";

const initialState = {
  resume: {
    educations: [],
    skills: [],
    experiences: []
  }
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
    default:
      return state
  }
}
