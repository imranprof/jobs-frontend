import {DESIGNATION_TEXT, DESIGNATION_EDIT_MODE} from "../actionTypes/contactTypes";

export const designationText = (designation) => {
  return {
    type: DESIGNATION_TEXT,
    payload: designation
  }
}

export const designationEditMode = (boolean) => {
  return {
    type: DESIGNATION_EDIT_MODE,
    payload: boolean
  }
}
