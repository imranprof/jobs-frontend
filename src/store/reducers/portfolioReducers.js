import {
  REMOVE_PORTFOLIO,
  UPDATE_PORTFOLIO,
  GET_PORTFOLIOS
} from "../actionTypes/portfolioTypes";
import {getProfileSlug} from "./authReducers";
import {ProfileData} from "../../../API/mock/profile/profileData";

const initialState = () => {
  if(getProfileSlug()) return {
    allPortfolios: [],
    allCategories: []
  }
  else return {
    allPortfolios: ProfileData.portfolios,
    allCategories: ProfileData.categoriesData
  }
};

export const portfolioReducer = (state = initialState(), action) => {
  switch (action.type) {
    case REMOVE_PORTFOLIO:
      return {
        ...state,
        ...action.payload
      };
    case UPDATE_PORTFOLIO:
      return {
        ...state,
        ...action.payload
      };
    case GET_PORTFOLIOS:
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
