import {UPDATE_PORTFOLIO, REMOVE_PORTFOLIO} from "../actionTypes/portfolioTypes";

export const updatePortfolio = (portfolios) => {
  return {
    type: UPDATE_PORTFOLIO,
    payload: portfolios
  }
}

export const removePortfolio = (portfolios) => {
  return {
    type: REMOVE_PORTFOLIO,
    payload: portfolios
  }
}
