import {REMOVE_PORTFOLIO} from "../actionTypes/portfolioTypes";

export const removePortfolio = (portfolios) => {
  return {
    type: REMOVE_PORTFOLIO,
    payload: portfolios
  }
}
