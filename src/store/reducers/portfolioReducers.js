import {
  REMOVE_PORTFOLIO,
  UPDATE_PORTFOLIO,
  GET_PORTFOLIOS
} from "../actionTypes/portfolioTypes";

const initialState = {
  allPortfolios: [],
  allCategories: []
};

export const portfolioReducer = (state = initialState, action) => {
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
