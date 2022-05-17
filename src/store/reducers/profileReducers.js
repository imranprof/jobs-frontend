import {SHOW_PROFILE} from "../actionTypes/profileTypes";
import {ProfileData} from "../../../API/mock/profile/profileData";

const initialState = {
  profile: ProfileData
}

export const profileReducer = (state = initialState.profile, action) => {
  switch (action.type) {
    case SHOW_PROFILE:
      return {
        ...state,
        profile: action.payload
      }
    default:
      return state
  }
}
