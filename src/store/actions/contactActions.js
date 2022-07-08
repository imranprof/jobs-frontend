import {
  DESIGNATION_UPDATE,
  DESIGNATION_EDIT_MODE,
  CONTACT_DESCRIPTION_UPDATE,
  CONTACT_DESCRIPTION_EDIT_MODE,
  PHONE_UPDATE,
  PHONE_EDIT_MODE
} from "../actionTypes/contactTypes";

// Designation
export const designationUpdate = (designation) => {
  return {
    type: DESIGNATION_UPDATE,
    payload: designation
  }
}

export const designationEditMode = (boolean) => {
  return {
    type: DESIGNATION_EDIT_MODE,
    payload: boolean
  }
}

// Contact Description
export const contactDescriptionUpdate = (description) => {
  return {
    type: CONTACT_DESCRIPTION_UPDATE,
    payload: description
  }
}

export const contactDescriptionEditMode = (boolean) => {
  return {
    type: CONTACT_DESCRIPTION_EDIT_MODE,
    payload: boolean
  }
}

// Phone Number
export const phoneUpdate = (phone) => {
  return {
    type: PHONE_UPDATE,
    payload: phone
  }
}

export const phoneEditMode = (boolean) => {
  return {
    type: PHONE_EDIT_MODE,
    payload: boolean
  }
}
