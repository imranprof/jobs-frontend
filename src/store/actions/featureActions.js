import {FEATURES_REMOVE, FEATURES_UPDATE} from "../actionTypes/featureTypes";

export const featuresUpdate = (features) => {
  return {
    type: FEATURES_UPDATE,
    payload: features
  }
}

export const featuresRemove = (features) => {
  return {
    type: FEATURES_REMOVE,
    payload: features
  }
}
