import axios from "axios";

import {SET_All_JOB_OFFER, SET_JOB_APPLICATION, SET_JOB_OFFER, SET_JOBS, UPDATE_JOB, SET_BEST_MATCHES_JOB, SET_MOST_RECENT_JOB} from "../actionTypes/jobsTypes";
import {sendMessageAction} from "./messageAction";

const jobPostUrl = process.env.NEXT_PUBLIC_JOBS_URL
const jobApplyUrl = process.env.NEXT_PUBLIC_JOB_APPLY_URL
const jobsUrl = process.env.NEXT_PUBLIC_My_JOB_URL
const jobEditUrl = process.env.NEXT_PUBLIC_My_JOB_EDIT_URL
const employeeSelectionUrl = process.env.NEXT_PUBLIC_EMPLOYEE_SELECTION_URL
const hireJobSeekerUrl = process.env.NEXT_PUBLIC_HIRE_JOB_SEEKER_URL
const allJobOfferUrl = process.env.NEXT_PUBLIC_ALL_JOB_OFFER_URL
const acceptHireUrl = process.env.NEXT_PUBLIC_HIRE_OFFER_URL
const bestMatchesJobsUrl = process.env.NEXT_PUBLIC_BEST_MATCHES_JOBS_URL
const mostRecentJobsUrl = process.env.NEXT_PUBLIC_MOST_RECENT_JOBS_URL

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
      "skills": `{${updatedJob.skills}}`,
      "budget": `{${updatedJob.budget}}`,
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

export const sendMailJobSeekerAction = (id, applicantId) => {
  const data = {
    "job_application": {
      "id": id,
      "email": true
    }
  }
  return (dispatch) => {
    const response = axios.patch(employeeSelectionUrl, data)
      .then(res => {
        dispatch(getIndividualJobs())
        let text = "Hi\n" +
          "This is to let you know that we have received your job-application. We appreciate your interest  for which you have applied for. You are shortlisted. If you have further query, please let us know at any time. We love to hear from you\n"
        if (applicantId) {
          dispatch(sendMessageAction({
            body: text,
            recipient_id: applicantId,
          }))
        }
      })
      .catch(err => err.response)
    return (response);
  }
}

export function setApplicationDetails(details) {
  if (details) {
    localStorage.setItem('details', JSON.stringify(details));
  } else {
    localStorage.removeItem('details');
  }
}

export const getApplicationDetails = () => {
  if (typeof window !== 'undefined') {
    const details = localStorage.getItem('details')
    if (details) {
      return details;
    }
    return null;
  }
}

export const setJobApplication = (details) => {
  return {
    type: SET_JOB_APPLICATION,
    payload: details
  }
}

export const getJobApplication = (id) => {
  const jobApplicationUrl = `${process.env.NEXT_PUBLIC_JOB_APPLICATION_URL}/${id}`;

  return (dispatch) => {
    axios.get(jobApplicationUrl)
      .then(res => {
        dispatch(setJobApplication(res.data.job_application_details))
      })
      .catch(err => err.response);
  }

}

export const hireJobSeeker = (hireDetails) => {
  const {id, rate, payType} = hireDetails
  const data = {
    "job_application": {
      "id": id,
      "hire_rate": `{${rate}}`,
      "pay_type": payType
    }
  }
  return (dispatch) => {
    const response = axios.patch(hireJobSeekerUrl, data)
      .then(res => res)
      .catch(err => err.response)
    return (response);
  }
}

const setAllJobOffer = (details) => {
  return {
    type: SET_All_JOB_OFFER,
    payload: details
  }
}

export const getAllJobOffer = () => {
  return (dispatch) => {
    axios.get(allJobOfferUrl)
      .then(res => {
        dispatch(setAllJobOffer(res.data.job_offers))
      })
      .catch(err => err.response);
  }
}

const setBestMatchesJobs = (jobs) => {
  return {
    type: SET_BEST_MATCHES_JOB,
    payload: jobs
  }
}

export const getBestMatchesJobs= () => {
  return (dispatch) => {
    axios.get(bestMatchesJobsUrl)
      .then(res => {
        dispatch(setBestMatchesJobs(res.data.jobs))
      })
      .catch(err => err.response);
  }
}

const setMostRecentJobs = (jobs) => {
  return {
    type: SET_MOST_RECENT_JOB,
    payload: jobs
  }
}

export const getMostRecentJobs= () => {
  return (dispatch) => {
    axios.get(mostRecentJobsUrl)
      .then(res => {
        dispatch(setMostRecentJobs(res.data.jobs))
      })
      .catch(err => err.response);
  }
}

const setJobOffer = (details) => {
  return {
    type: SET_JOB_OFFER,
    payload: details
  }
}

export const getJobOffer = (id) => {
  const jobOfferShowUrl = `${process.env.NEXT_PUBLIC_JOB_OFFER_SHOW_URL}/${id}`;

  return (dispatch) => {
    axios.get(jobOfferShowUrl)
      .then(res => {
        dispatch(setJobOffer(res.data.offer_details))
      })
      .catch(err => err.response);
  }

}

export const acceptHireAction = (id, choice) => {

  const data = {
    "job_offer": {
      "id": id,
      "hire_confirmation": choice
    }
  }
  return (dispatch) => {
    const response = axios.patch(acceptHireUrl, data)
      .then(res => dispatch(getJobOffer(id)))
      .catch(err => err.response)
    return (response);
  }
}
