import {
  SET_All_JOB_OFFER,
  SET_APPLICATION_DETAILS,
  SET_JOB_APPLICATION,
  SET_JOB_OFFER,
  SET_JOBS,
  SET_SEARCH_JOB,
  SHOW_JOBS,
  UPDATE_JOB,
  SET_BEST_MATCHES_JOB,
  SET_MOST_RECENT_JOB
} from "../actionTypes/jobsTypes";

const initialState = {
  initialLoader: true,
  jobs: [],
  individualJobs: [],
  searchJobs: [],
  applicationDetails: {},
  jobApplication: {},
  jobOfferList: [],
  jobOffer: {},
  bestMatchesJobs: [],
  mostRecentJobs: []
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
    case SET_All_JOB_OFFER:
      return {
        ...state,
        jobOfferList: action.payload,
        initialLoader: false
      }
    case SET_BEST_MATCHES_JOB:
      return {
        ...state,
        bestMatchesJobs: action.payload,
        initialLoader: false
      }
    case SET_MOST_RECENT_JOB:
      return {
        ...state,
        mostRecentJobs: action.payload,
        initialLoader: false
      }
    case SET_JOB_OFFER:
      return {
        ...state,
        jobOffer: action.payload,
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
