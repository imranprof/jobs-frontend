import axios from "axios";

const jobPostUrl = process.env.NEXT_PUBLIC_JOBS_URL
const jobApplyUrl = process.env.NEXT_PUBLIC_JOB_APPLY_URL


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
