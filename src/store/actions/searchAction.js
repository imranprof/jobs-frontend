import axios from "axios";
import {RESET, SET_PROFILES} from "../actionTypes/profilesTypes";

const searchURL = process.env.NEXT_PUBLIC_SEARCH_URL;

export const getSearchValue = () => {
  if (typeof window !== 'undefined') {
    const searchValue = localStorage.getItem('searchValue')
    if (searchValue) {
      return searchValue;
    }
    return null;
  }
}

const setSearchValue = (value) =>{
  if (value) {
    localStorage.setItem('searchValue', value);
  } else {
    localStorage.removeItem('searchValue');
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
    if(tempValue.length !==0){
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
