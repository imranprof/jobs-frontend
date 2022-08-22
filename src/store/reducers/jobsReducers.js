import {SHOW_JOBS} from "../actionTypes/jobsTypes";

const initialState = {
  initialLoader: true,
  jobs: []
}

export const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_JOBS:
      return {
        ...state,
        jobs: action.payload,
        initialLoader: false,
      }
    default:
      return state
  }
}
