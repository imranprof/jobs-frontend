import {
  SET_APPLICATION_DETAILS,
  SET_JOB_APPLICATION,
  SET_JOBS,
  SET_SEARCH_JOB,
  SHOW_JOBS,
  UPDATE_JOB
} from "../actionTypes/jobsTypes";

const initialState = {
  initialLoader: true,
  jobs: [],
  individualJobs: [],
  searchJobs: [],
  applicationDetails: {},
  jobApplication: {}
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
    case SET_SEARCH_JOB:
      return {
        ...state,
        searchJobs: action.payload,
        initialLoader: false
      }
    case SET_APPLICATION_DETAILS:
      return {
        ...state,
        applicationDetails: action.payload
      }
    case SET_JOB_APPLICATION:
      return {
        ...state,
        jobApplication: action.payload,
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
