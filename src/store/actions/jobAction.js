import axios from "axios";
import {SET_JOBS} from "../actionTypes/jobsTypes";

const jobPostUrl = process.env.NEXT_PUBLIC_JOBS_URL
const jobsUrl = process.env.NEXT_PUBLIC_My_JOB_URL

export const addJobAction = (job) => {
  const {title, description, location, skills} = job;
  let data = {
    "job": {
      "title": title,
      "description": description,
      "skills": `{${skills}}`,
      "location": location
    }
  }

  return async (dispatch) => {
    const response = axios.post(jobPostUrl, data)
      .then(res => res)
      .catch(err => err.response)
    return (response);
  }
}

export const setIndividualJobs = (jobs) => {
  return {
    type: SET_JOBS,
    payload: jobs
  }
}

export const getIndividualJobs = () => {

  return async (dispatch) => {
    const response = axios.post(jobsUrl)
      .then(res => dispatch(setIndividualJobs(res.data.jobs)))
      .catch(err => err.response)
    return (response);
  }
}
