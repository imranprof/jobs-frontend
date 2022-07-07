import {DESIGNATION_TEXT, DESIGNATION_EDIT_MODE} from "../actionTypes/contactTypes";
import {ProfileData} from "../../../API/mock/profile/profileData";

const {designation} = ProfileData
const initialState = {
  designation: designation
}

export const editContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case DESIGNATION_TEXT:
      return {
        ...state,
        designation: action.payload,
      }
    case DESIGNATION_EDIT_MODE:
      return {
        ...state,
        designationMode: action.payload,
      }
    default:
      return state
  }
}
