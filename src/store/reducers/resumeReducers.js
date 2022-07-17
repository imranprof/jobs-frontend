import {RESUME_UPDATE, RESUME_ITEM_REMOVE, GET_RESUME} from "../actionTypes/resumeTypes";
import {ProfileData} from "../../../API/mock/profile/profileData";

const { resume } = ProfileData;
const initialState = {
  resume: resume
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
