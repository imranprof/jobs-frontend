import {RESUME_UPDATE, RESUME_ITEM_REMOVE} from "../actionTypes/resumeTypes";
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
    case RESUME_ITEM_REMOVE:
      return {
        ...state,
        resume: action.payload,
      }
    default:
      return state
  }
}
