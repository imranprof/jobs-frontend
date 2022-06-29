import {RESUME_UPDATE} from "../actionTypes/resumeTypes";
import {ProfileData} from "../../../API/mock/profile/profileData";

const { resume } = ProfileData;
const initialState = {
  resume: resume
}

export const resumeReducers = (state = initialState, action) => {
  switch (action.type) {
    case RESUME_UPDATE:
      return {
        ...state,
        resume: action.payload,
      }
    default:
      return state
  }
}
