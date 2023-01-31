import {SHOW_PROFILE} from "../actionTypes/profileTypes";
import axios from "axios";
import {getProfileAction} from "./topSectionActions";
const roleChangeUrl = process.env.NEXT_PUBLIC_ROLE_CHANGE_URL

export const showProfile = (profile) => {
  return {
    type: SHOW_PROFILE,
    payload: profile
  }
}

export const updateRoleAction = (id, choice) => {
  const data = {
    "user": {
      "profile_id": id,
      "modify_role": choice
    }
  }
  return (dispatch) => {
    axios.patch(roleChangeUrl, data)
      .then(res => {
        dispatch(getProfileAction())
      })
      .catch(err => err.response)
  }
}
