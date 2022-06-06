import {SHOW_PROFILE} from "../actionTypes/profileTypes";

export const showProfile = (profile) => {
  return {
    type: SHOW_PROFILE,
    payload: profile
  }
}
