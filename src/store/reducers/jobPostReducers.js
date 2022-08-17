import {GET_JOB_POST_ALL_SKILLS} from "../actionTypes/jobPostSkillsTypes";

const initialState = {
  allJobSkills: []
}

export const jobPostReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOB_POST_ALL_SKILLS:
      return {
        ...state,
        allJobSkills: action.payload
      }
    default:
      return state
  }
}
