import {RESUME_UPDATE} from "../actionTypes/resumeTypes";

export const resumeUpdate = (resume) => {
  return {
    type: RESUME_UPDATE,
    payload: resume
  }
}
