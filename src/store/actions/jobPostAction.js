import axios from "axios";

import {GET_JOB_POST_ALL_SKILLS} from "../actionTypes/jobPostSkillsTypes";
import {getProfileSlug} from "../reducers/authReducers";
import {getAllSkills, getResume} from "./resumeActions";

const profileURL = () => `${process.env.NEXT_PUBLIC_PROFILE_URL}/${getProfileSlug()}`;

export const getJobPostAllSkills = (allSkills) => {
  return {
    type: GET_JOB_POST_ALL_SKILLS,
    payload: allSkills
  }
}

export const getJobPostAction = () => {
  return (dispatch) => {
    axios.get(profileURL()).then(res => {
      dispatch(getJobPostAllSkills(res.data.all_skills));
    })
      .catch(err => err.response);
  }
}
