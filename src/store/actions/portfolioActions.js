import axios from "axios";

import {UPDATE_PORTFOLIO, REMOVE_PORTFOLIO, GET_PORTFOLIOS} from "../actionTypes/portfolioTypes";

const profileURL = process.env.NEXT_PUBLIC_PROFILE_URL;

export const updatePortfolio = (portfolios) => {
  return {
    type: UPDATE_PORTFOLIO,
    payload: portfolios
  }
}

export const removePortfolio = (portfolios, allCategories) => {
  return {
    type: REMOVE_PORTFOLIO,
    payload: {
      allPortfolios: portfolios,
      allCategories: allCategories
    }
  }
}

export const removePortfolioAction = (portfolioID) => {
  return (dispatch) => {
    axios.patch(profileURL, {
      "user": {
        "projects_attributes": [
          {
            "id": portfolioID,
            "_destroy": true
          }
        ]
      }
    }).then(res => dispatch(removePortfolio(res.data.portfolio_data.projects, res.data.all_categories)))
      .catch(err => err.response)
  }
}

export const getPortfolios = (portfolios, allCategories) => {
  return {
    type: GET_PORTFOLIOS,
    payload: {
      allPortfolios: portfolios,
      allCategories: allCategories
    }
  }
}

export const getPortfoliosAction = (values) => {
  const {id} = values
  return (dispatch) => {
    axios.get(profileURL, {
      params: {
        user_id: id
      }
    }).then(res => dispatch(getPortfolios(res.data.portfolio_data.projects, res.data.all_categories)))
      .catch(err => err.response);
  }
}