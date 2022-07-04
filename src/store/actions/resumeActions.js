import {RESUME_UPDATE, RESUME_ITEM_REMOVE} from "../actionTypes/resumeTypes";

export const resumeUpdate = (resume) => {
  return {
    type: RESUME_UPDATE,
    payload: resume
  }
}

export const resumeItemRemove = (resume) => {
  return {
    type: RESUME_ITEM_REMOVE,
    payload: resume
  }
}
