import {REMOVE_PORTFOLIO, UPDATE_TITLE, UPDATE_DESCRIPTION, UPDATE_CATEGORIES} from "../actionTypes/portfolioTypes";

export const removePortfolio = (portfolios) => {
  return {
    type: REMOVE_PORTFOLIO,
    payload: portfolios
  }
}

export const updateCategories = (porfolio) => {
  return {
    type: UPDATE_CATEGORIES,
    payload: porfolio
  }
}

export const updateTitle = (portfolio) => {
  return {
    type: UPDATE_TITLE,
    payload: portfolio
  }
}

export const updateDescription = (portfolio) => {
  return {
    type: UPDATE_DESCRIPTION,
    payload: portfolio
  }
}
