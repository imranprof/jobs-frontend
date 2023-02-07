import axios from "axios";

import {RESET, SET_PROFILES} from "../actionTypes/profilesTypes";
import {SET_SEARCH_JOB} from "../actionTypes/jobsTypes";
import {getProfileSlug} from "../reducers/authReducers";

const searchURL = `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/profiles/search`;
const jobSearchURL = `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/jobs/search`

export const getSearchValue = () => {
  if (typeof window !== 'undefined') {
    const searchValue = localStorage.getItem('searchValue')
    if (searchValue) {
      return searchValue;
    }
    return null;
  }
}

export const setSearchValue = (value) => {
  if (value) {
    localStorage.setItem('searchValue', value);
  } else {
    localStorage.removeItem('searchValue');
  }
}

export const getSearchType = () => {
  if (typeof window !== 'undefined') {
    const searchType = localStorage.getItem('searchType')
    if (searchType) {
      return searchType;
    }
    return null;
  }
}

export const setSearchType = (value) => {
  if (value) {
    localStorage.setItem('searchType', value)
  } else {
    localStorage.removeItem('searchType')
  }
}

export const setProfiles = (profiles) => {
  return {
    type: SET_PROFILES,
    payload: profiles
  }
}

export const resetProfiles = (value) => {
  return {
    type: RESET,
    payload: value
  }
}

export const getSearchProfiles = (value) => {
  return (dispatch) => {
    let tempValue = value.trim()
    if (tempValue.length !== 0) {
      dispatch(resetProfiles(false))
      setSearchValue(value)
      axios.get(searchURL, {
        params: {
          search_value: value
        }
      }).then(res => {
        dispatch(setProfiles(res.data.profiles));
      })
        .catch(err => console.log(err.response));
    }

  }
}

export const setSearchJobs = (jobs) => {
  return {
    type: SET_SEARCH_JOB,
    payload: jobs
  }
}

export const getSearchJobs = (value) => {
  return (dispatch) => {
    axios.patch(jobSearchURL, value).then(res => {
      dispatch(setSearchJobs(res.data.jobs))
    })
      .catch(err => console.log(err.response));
  }
}
