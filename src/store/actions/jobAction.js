import axios from "axios";

import {
  SET_All_JOB_OFFER,
  SET_JOB_APPLICATION,
  SET_JOB_OFFER,
  SET_JOBS,
  UPDATE_JOB,
  SET_BEST_MATCHES_JOB,
  SET_MOST_RECENT_JOB,
  SET_PAGE,
  SET_ALL_PROGRESS_JOBS,
  SET_ALL_COMPLETED_JOBS,
  SET_CONTRACT_JOB_SHOW,
  SHOW_ALL_TIMESHEETS
} from "../actionTypes/jobsTypes";
import {sendMessageAction} from "./messageAction";

const jobPostUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/jobs`
const jobApplyUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/jobs/apply`
const jobsUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/jobs/my-jobs`
const jobEditUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/jobs/job`
const employeeSelectionUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/jobs/employee-select`
const hireJobSeekerUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/jobs/hire_job_seeker`
const allJobOfferUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/jobs/offers`
const acceptHireUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/jobs/accept-hire-offer`
const bestMatchesJobsUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/jobs/best_matches`
const mostRecentJobsUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/jobs/most_recent`
const allContractJobsUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/job_applications/job_contracts`
const contractJobShowUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/job_applications/job_contract`
const jobContractEndUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/job_applications/end_contract`
const contractEndFeedbackUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/job_applications/feedback`
const getAllTimeSheetsUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/job_contracts/time_sheets`
const timeSheetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/job_contracts/time_sheet`

export const addJobAction = (job) => {
  const {title, description, location, skills, payType, budget, status} = job;
  let data = {
    "job": {
      "title": title,
      "description": description,
      "skills": `{${skills}}`,
      "pay_type": payType,
      "budget": `{${budget}}`,
      "location": location,
      "status": status
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
      "status": updatedJob.status_label
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
  const jobApplicationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/jobs/job_application/${id}`;

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

export const getBestMatchesJobs = () => {
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

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page
  }
}

export const getMostRecentJobs = (jobs, page) => {
  return (dispatch) => {
    axios.get(mostRecentJobsUrl, {
      params: {
        page: page
      }
    })
      .then(res => {
        dispatch(setMostRecentJobs(jobs.concat(res.data.jobs)))
        dispatch(setPage(page + 1));
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
  const jobOfferShowUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/jobs/offer/${id}`;

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

const setAllJobProgress = (details) => {
  return {
    type: SET_ALL_PROGRESS_JOBS,
    payload: details
  }
}

export const getAllJobProgress = () => {
  const data = {
    "job_contract": {
      "contract_status": 1
    }
  }

  return (dispatch) => {
    axios.post(allContractJobsUrl, data)
      .then(res => {
        dispatch(setAllJobProgress(res.data.job_contracts))
      })
      .catch(err => err.response);
  }
}

const setAllCompletedJobs = (details) => {
  return {
    type: SET_ALL_COMPLETED_JOBS,
    payload: details
  }
}

export const getAllCompletedJobs = () => {
  const data = {
    "job_contract": {
      "contract_status": 2
    }
  }

  return (dispatch) => {
    axios.post(allContractJobsUrl, data)
      .then(res => {
        dispatch(setAllCompletedJobs(res.data.job_contracts))
      })
      .catch(err => err.response);
  }
}

const setContractJobShow = (details) => {
  return {
    type: SET_CONTRACT_JOB_SHOW,
    payload: details
  }
}

export const getContractJobShow = (id) => {
  const url = `${contractJobShowUrl}/${id}`;

  return (dispatch) => {
    axios.get(url)
      .then(res => {
        dispatch(setContractJobShow(res.data.contract_details))
      })
      .catch(err => err.response);
  }
}

export const jobContractEnd = (id) => {
  const data = {
    "job_contract": {
      "id": id,
      "contract_status": "Closed"
    }
  }
  return (dispatch) => {
    const response = axios.patch(jobContractEndUrl, data)
      .then(res => dispatch(getContractJobShow(id)))
      .catch(err => err.response)
    return (response);
  }
}

export const contractEndFeedback = (id, feedback, rating) => {
  const data = {
    "job_contract": {
      "id": id,
      "feedback": feedback,
      "rating": rating
    }
  }
  return (dispatch) => {
    const response = axios.patch(contractEndFeedbackUrl, data)
      .then(res => dispatch(getContractJobShow(id)))
      .catch(err => err.response)
    return (response);
  }
}

export const timesheetCreateDetails = (id, startDate, endDate, hours, minutes, description) => {
  const data = {
    "job_contract": {
      "job_application_id": id,
      "start_date": startDate,
      "end_date": endDate,
      "work_hours": hours,
      "work_minutes": minutes,
      "work_description": description
    }
  }
  return (dispatch) => {
    const response = axios.post(timeSheetUrl, data)
      .then(res => dispatch(getContractJobShow(id)))
      .catch(err => err.response)
    return (response);
  }
}

const setAllTimeSheets = (timesheetList) => {
  return {
    type: SHOW_ALL_TIMESHEETS,
    payload: timesheetList
  }
}

export const getAllTimeSheets = (id) => {
  return (dispatch) => {
    const response = axios.get(getAllTimeSheetsUrl, {
      params: {
        contract_id: id
      }
    })
      .then(res => {
        dispatch(setAllTimeSheets(res.data.time_sheets))
      })
      .catch(err => err.response)
    return (response);
  }
}

export const deleteTimeSheet = (id) => {
  const data = {
    "job_contract": {
      "id": id
    }
  }
  return (dispatch) => {
    const response = axios.delete(timeSheetUrl, {data} )
      .then(res => res)
      .catch(err => err.response)
    return (response);
  }
}

export const updateTimeSheet = (timesheet) => {
  const data = {
    "job_contract": {
      "id": timesheet.id,
      "start_date": timesheet.start_date,
      "end_date": timesheet.end_date,
      "work_description": timesheet.work_description,
      "work_hours": timesheet.work_hours,
      "work_minutes": timesheet.work_minutes,
    }
  }
  return (dispatch) => {
    const response = axios.patch(timeSheetUrl, data)
      .then(res => res)
      .catch(err => err.response)
    return (response);
  }
}

export const sendTimesheetToEmployer = (timesheet_ids, contract_id) => {
  const data = {
    "job_contract": {
      "id": contract_id,
      "timesheet_ids": timesheet_ids,
    }
  }
  return (dispatch) => {
    const response = axios.post(getAllTimeSheetsUrl, data)
      .then(res => res)
      .catch(err => err.response)
    return (response);
  }
}

export const approvedRejectedTimesheet = (contract_id, status) => {
  const data = {
    "job_contract": {
      "id": contract_id,
      "status": status
    }
  }
  return (dispatch) => {
    const response = axios.patch(getAllTimeSheetsUrl, data)
      .then(res => res)
      .catch(err => err.response)
    return (response);
  }
}
