import {
  REMOVE_PORTFOLIO,
  UPDATE_PORTFOLIO,
  GET_PORTFOLIOS
} from "../actionTypes/portfolioTypes";

const initialState = [];

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
    case GET_PORTFOLIOS:
      return action.payload;
    default:
      return portfolios;
  }
}
