import {REMOVE_PORTFOLIO, UPDATE_CATEGORIES, UPDATE_DESCRIPTION, UPDATE_TITLE} from "../actionTypes/portfolioTypes";
import {ProfileData} from "../../../API/mock/profile/profileData";

const initialState = ProfileData.portfolios;

export const portfolioReducer = (portfolios = initialState, action) => {
  switch (action.type) {
    case REMOVE_PORTFOLIO:
      return action.payload
    case UPDATE_TITLE:
      return portfolios.map((portfolio) => {
        if (portfolio.id === action.payload.id) {
          portfolio.title = action.payload.title
        }
        return portfolio;
      })
    case UPDATE_DESCRIPTION:
      return portfolios.map((portfolio) => {
        if (portfolio.id === action.payload.id) {
          portfolio.description = action.payload.description
        }
        return portfolio;
      })
    case UPDATE_CATEGORIES:
      return portfolios.map((portfolio) => {
        if (portfolio.id === action.payload.id) {
          portfolio.categories = action.payload.categories
        }
        return portfolio;
      })
    default:
      return portfolios
  }
}
