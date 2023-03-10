import axios from "axios";

import {SHOW_JOBS} from "../actionTypes/jobsTypes";

const jobsURL = `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/jobs`;

export const showJobs = (jobs) => {
  return {
    type: SHOW_JOBS,
    payload: jobs
  }
}

export const getJobs = () => {
  return (dispatch) => {
    axios.get(jobsURL).then(res => {
      dispatch(showJobs(res.data.jobs))
    })
      .catch(err => err.response);
  }
}
