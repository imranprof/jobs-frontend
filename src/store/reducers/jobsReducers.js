import {SET_JOBS, SHOW_JOBS, UPDATE_JOB} from "../actionTypes/jobsTypes";

const initialState = {
  initialLoader: true,
  jobs: [],
  individualJobs: []
}

export const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_JOBS:
      return {
        ...state,
        jobs: action.payload,
        initialLoader: false,
      }
    case SET_JOBS:
      return {
        ...state,
        individualJobs: action.payload,
        initialLoader: false
      }
    case UPDATE_JOB:
      return {
        ...state,
      };
    default:
      return state
  }
}