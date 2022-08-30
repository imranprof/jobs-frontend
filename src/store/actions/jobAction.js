import axios from "axios";
import {SET_JOBS, UPDATE_JOB} from "../actionTypes/jobsTypes";

const jobPostUrl = process.env.NEXT_PUBLIC_JOBS_URL
const jobApplyUrl = process.env.NEXT_PUBLIC_JOB_APPLY_URL
const jobsUrl = process.env.NEXT_PUBLIC_My_JOB_URL
const jobEditUrl = process.env.NEXT_PUBLIC_My_JOB_EDIT_URL

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

export const  jobApplyAction = (id) => {
  let data = {
    "job": {
      "id": id
    }
  }

  return async (dispatch) => {
    const response = axios.post(jobApplyUrl, data)
      .then(res => res)
      .catch(err => err.response)
    return (response);
  }
}

export const updateJob = () => {
  return {
    type: UPDATE_JOB,
  }
}

export const updateJobAction = (oldJob, updatedJob) => {
  const data = {
    "job": {
      "id": updatedJob.id,
      "title": updatedJob.title,
      "description": updatedJob.description,
      "location": updatedJob.location,
      "skills": `{${updatedJob.skills}}`
    }
  }
  return (dispatch) => {
    axios.patch(jobEditUrl, data)
      .then(res => {
        dispatch(getIndividualJobs())
        dispatch(updateJob())
      })
      .catch(err => err.response)
  }
}

export const removeJobAction = (id) => {
  const data = {
    "job": {
      "id": id
    }
  }
  return (dispatch) => {
    const response = axios.delete(jobEditUrl, {data})
      .then(res => res)
      .catch(err => err.response)
    return (response);
  }
}
