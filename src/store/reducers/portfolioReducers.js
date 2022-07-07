import {
  REMOVE_PORTFOLIO,
  UPDATE_PORTFOLIO,
} from "../actionTypes/portfolioTypes";
import {ProfileData} from "../../../API/mock/profile/profileData";

const initialState = ProfileData.portfolios;

export const portfolioReducer = (portfolios = initialState, action) => {
  switch (action.type) {
    case REMOVE_PORTFOLIO:
      return action.payload;
    case UPDATE_PORTFOLIO:
      return portfolios.map((portfolio) => {
        if (portfolio.id === action.payload.id) {
          portfolio.title = action.payload.title;
          portfolio.description = action.payload.description;
          portfolio.categories = action.payload.categories;
        }
        return portfolio;
      });
    default:
      return portfolios;
  }
}
