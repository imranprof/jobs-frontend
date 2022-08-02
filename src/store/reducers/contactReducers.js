import {
  DESIGNATION_UPDATE,
  DESIGNATION_EDIT_MODE,
  CONTACT_DESCRIPTION_UPDATE,
  CONTACT_DESCRIPTION_EDIT_MODE,
  PHONE_UPDATE,
  PHONE_EDIT_MODE,
  SET_EMAIL
} from "../actionTypes/contactTypes";
import {getProfileSlug} from "./authReducers";
import {ProfileData} from "../../../API/mock/profile/profileData";

const initialState = () => {
  if (getProfileSlug())
    return {
      designation: null,
      designationMode: false,
      contactDescription: null,
      contactDescriptionMode: false,
      phone: null,
      phoneMode: false,
      contact_email: null
    }
  else return {
    designation: ProfileData.designation,
    designationMode: false,
    contactDescription: ProfileData.contactDescription,
    contactDescriptionMode: false,
    phone: ProfileData.phone,
    phoneMode: false,
    contact_email: ProfileData.email
  }
}

export const contactReducer = (state = initialState(), action) => {
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
    case SET_EMAIL:
      return {
        ...state,
        contact_email: action.payload,
      }
    default:
      return state
  }
}
