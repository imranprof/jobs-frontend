import axios from "axios";
import {SET_JOBS, UPDATE_JOB} from "../actionTypes/jobsTypes";

const jobPostUrl = process.env.NEXT_PUBLIC_JOBS_URL
const jobApplyUrl = process.env.NEXT_PUBLIC_JOB_APPLY_URL
const jobsUrl = process.env.NEXT_PUBLIC_My_JOB_URL
const jobEditUrl = process.env.NEXT_PUBLIC_My_JOB_EDIT_URL
const employeeSelectionUrl = process.env.NEXT_PUBLIC_EMPLOYEE_SELECTION_URL

export const addJobAction = (job) => {
  const {title, description, location, skills, payType, budget} = job;
  let data = {
    "job": {
      "title": title,
      "description": description,
      "skills": `{${skills}}`,
      "pay_type": payType,
      "budget": `{${budget}}`,
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

export const jobApplyAction = (id, bid_rate, cover_letter) => {
  let data = {
    "job": {
      "id": id
    },
    "job_application": {
      "bid_rate": bid_rate,
      "cover_letter": cover_letter
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
      "pay_type": updatedJob.pay_type,
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

export const employeeSelectionAction = (id, value) => {
  const data = {
    "job_application": {
      "id": id,
      "selection": value
    }
  }
  return (dispatch) => {
    const response = axios.patch(employeeSelectionUrl, data)
      .then(res => dispatch(getIndividualJobs()))
      .catch(err => err.response)
    return (response);
  }
}

export const sendMailJobSeekerAction = (id) => {
  const data = {
    "job_application": {
      "id": id,
      "email": true
    }
  }
  return (dispatch) => {
    const response = axios.patch(employeeSelectionUrl, data)
      .then(res => dispatch(getIndividualJobs()))
      .catch(err => err.response)
    return (response);
  }
}
