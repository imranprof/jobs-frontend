import axios from "axios";
import {RESUME_UPDATE, RESUME_ITEM_REMOVE, GET_RESUME} from "../actionTypes/resumeTypes";

const profileURL = process.env.NEXT_PUBLIC_PROFILE_URL;

export const getResume = (resume) => {
  return {
    type: GET_RESUME,
    payload: {
      resume: resume,
    }
  }
}

export const getResumeAction = (values) => {
  const {id} = values
  return (dispatch) => {
    axios.get(profileURL, {
      params: {
        user_id: id
      }
    }).then(res => dispatch(getResume(res.data.resume_data)))
      .catch(err => err.response);
  }
}

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
