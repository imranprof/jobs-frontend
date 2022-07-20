import {FEATURES_REMOVE, FEATURES_UPDATE} from "../actionTypes/featureTypes";
import {ProfileData} from "../../../API/mock/profile/profileData";

const initialState = ProfileData.features

export const featureReducer = (features = initialState, action) => {
  switch (action.type) {
    case FEATURES_UPDATE:
      return action.payload;
    case FEATURES_REMOVE:
      return action.payload;
    default:
      return features
  }
}
