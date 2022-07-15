import axios from "axios";

import {UPDATE_PORTFOLIO, REMOVE_PORTFOLIO, GET_PORTFOLIOS} from "../actionTypes/portfolioTypes";

const profileURL = process.env.NEXT_PUBLIC_PROFILE_URL;

export const updatePortfolio = (portfolios, allCategories) => {
  return {
    type: UPDATE_PORTFOLIO,
    payload: {
      allPortfolios: portfolios,
      allCategories: allCategories
    }
  }
}

export const updatePortfolioAction = (oldPortfolio, updatedPortfolio) => {
  let deleteCategories = oldPortfolio.categories.map(
    category => {
      let flag = true;
      for (let i = 0; i < updatedPortfolio.categories.length; i++) {
        if (updatedPortfolio.categories[i].category_id === category.category_id) {
          flag = false;
        }
      }
      if (flag) return {
        id: category.id,
        _destroy: true
      }
    }
  )

  let addCategories = updatedPortfolio.categories.map(
    category => {
      let flag = true;
      for (let i = 0; i < oldPortfolio.categories.length; i++) {
        if (oldPortfolio.categories[i].category_id === category.category_id) {
          flag = false;
        }
      }
      if (flag) return {
        category_id: category.category_id
      }
    }
  );

  const data = {
    "user": {
      "projects_attributes": [
        {
          "id": updatedPortfolio.id,
          "title": updatedPortfolio.title,
          "description": updatedPortfolio.description,
          "react_count": updatedPortfolio.react_count,
          "live_url": updatedPortfolio.live_url,
          "source_url": updatedPortfolio.source_url,
          "categorizations_attributes": [...addCategories, ...deleteCategories]
        }
      ]
    }
  }

  return (dispatch) => {
    axios.patch(profileURL, data)
      .then(res => dispatch(updatePortfolio(res.data.portfolio_data.projects, res.data.all_categories)))
      .catch(err => err.response)
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