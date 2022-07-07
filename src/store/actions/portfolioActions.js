import {UPDATE_PORTFOLIO, REMOVE_PORTFOLIO, GET_PORTFOLIOS} from "../actionTypes/portfolioTypes";

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

export const getPortfolios = (portfolios) => {
  return {
    type: GET_PORTFOLIOS,
    payload: portfolios
  }
}