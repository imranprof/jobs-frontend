import {GET_FEATURES, UPDATE_FEATURE, REMOVE_FEATURE} from "../actionTypes/featureTypes";
import {ProfileData} from "../../../API/mock/profile/profileData"
import {getProfileSlug} from "./authReducers";

const {features} = ProfileData;
const initialState = () => {
  if (getProfileSlug())
    return {
      allFeatures: []
    }
  else return {
    allFeatures: features
  }
};

export const featureReducer = (state = initialState(), action) => {
  switch (action.type) {
    case GET_FEATURES:
      return {
        ...state,
        ...action.payload
      };
    case UPDATE_FEATURE:
      return {
        ...state,
        ...action.payload
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return {
        ...state
      };
  }
}
