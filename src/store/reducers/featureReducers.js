import {GET_FEATURES, UPDATE_FEATURE, REMOVE_FEATURE} from "../actionTypes/featureTypes";

const initialState = {
  allFeatures: []
};

export const featureReducer = (state = initialState, action) => {
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
