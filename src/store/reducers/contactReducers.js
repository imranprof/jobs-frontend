import {
  DESIGNATION_UPDATE,
  DESIGNATION_EDIT_MODE,
  CONTACT_DESCRIPTION_UPDATE,
  CONTACT_DESCRIPTION_EDIT_MODE,
  PHONE_UPDATE,
  PHONE_EDIT_MODE
} from "../actionTypes/contactTypes";
import {ProfileData} from "../../../API/mock/profile/profileData";

const {designation, contactDescription, phone} = ProfileData
const initialState = {
  designation: designation,
  designationMode: false,
  contactDescription: contactDescription,
  contactDescriptionMode: false,
  phone: phone,
  phoneMode: false
}

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case DESIGNATION_UPDATE:
      return {
        ...state,
        designation: action.payload,
      }
    case DESIGNATION_EDIT_MODE:
      return {
        ...state,
        designationMode: action.payload,
      }
    case CONTACT_DESCRIPTION_UPDATE:
      return {
        ...state,
        contactDescription: action.payload,
      }
    case CONTACT_DESCRIPTION_EDIT_MODE:
      return {
        ...state,
        contactDescriptionMode: action.payload,
      }
    case PHONE_UPDATE:
      return {
        ...state,
        phone: action.payload,
      }
    case PHONE_EDIT_MODE:
      return {
        ...state,
        phoneMode: action.payload,
      }
    default:
      return state
  }
}
