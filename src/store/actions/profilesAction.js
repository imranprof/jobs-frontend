import axios from "axios";

import {SHOW_PROFILES, SET_PAGE} from "../actionTypes/profilesTypes";

const profilesURL = process.env.NEXT_PUBLIC_PROFILE_URL;

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page
  }
}

export const showProfiles = (profiles) => {
  return {
    type: SHOW_PROFILES,
    payload: profiles
  }
}

export const getProfiles = (profiles, page) => {
  return (dispatch) => {
    axios.get(profilesURL, {
      params: {
        page: page
      }
    }).then(res => {
      dispatch(showProfiles(profiles.concat(res.data.profiles)));
      dispatch(setPage(page + 1));
    })
      .catch(err => err.response);
  }
}
