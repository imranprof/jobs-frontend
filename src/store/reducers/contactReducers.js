import {
  DESIGNATION_UPDATE,
  DESIGNATION_EDIT_MODE,
  CONTACT_DESCRIPTION_UPDATE,
  CONTACT_DESCRIPTION_EDIT_MODE,
  PHONE_UPDATE,
  PHONE_EDIT_MODE,
  SET_EMAIL,
  LOCATION_UPDATE,
  LOCATION_EDIT_MODE
} from "../actionTypes/contactTypes";

const initialState = {
  designation: "",
  designationMode: false,
  contactDescription: "",
  contactDescriptionMode: false,
  phone: "",
  phoneMode: false,
  contact_email: "",
  location: "",
  locationMode: false
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
    case LOCATION_UPDATE:
      return {
        ...state,
        location: action.payload,
      }
    case LOCATION_EDIT_MODE:
      return {
        ...state,
        locationMode: action.payload,
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
