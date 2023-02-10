import axios from "axios";

import {GET_PORTFOLIOS, REMOVE_PORTFOLIO, UPDATE_PORTFOLIO} from "../actionTypes/portfolioTypes";
import {getProfileSlug} from "../reducers/authReducers";
import {ProfileData} from "../../../API/mock/profile/profileData";

const profileURL = () => `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/profiles/${getProfileSlug()}`;

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

  let data = {
    "user": {
      "projects_attributes": [
        {
          "id": updatedPortfolio.id,
          "title": updatedPortfolio.title,
          "description": updatedPortfolio.description,
          "react_count": updatedPortfolio.react_count,
          "live_url": updatedPortfolio.live_url,
          "source_url": updatedPortfolio.source_url,
          "categorizations_attributes": [...addCategories, ...deleteCategories],
          "image": {"data": updatedPortfolio.image}
        }
      ]
    }
  }
  if (!updatedPortfolio.image) delete data.user.projects_attributes[0].image;

  return (dispatch) => {
    axios.patch(profileURL(), data)
      .then(res => dispatch(updatePortfolio(res.data.portfolio_data.projects, res.data.all_categories)))
      .catch(err => err.response)
  }
}

export const addPortfolioAction = (portfolio) => {
  let data = {
    "projects_attributes": [
      {
        "title": portfolio.title,
        "categorizations_attributes": portfolio.categories.map((category) => ({
          category_id: category.category_id
        })),
        "description": portfolio.description,
        "react_count": 0,
        "live_url": "#",
        "source_url": "#",
        "image": {"data": portfolio.image}
      }
    ]
  }
  if (!portfolio.image) delete data.projects_attributes[0].image;

  return (dispatch) => {
    axios.patch(profileURL(), {user: data},
    ).then(res => dispatch(getPortfolios(res.data.portfolio_data.projects, res.data.all_categories)))
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
    axios.patch(profileURL(), {
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

export const getPortfoliosAction = () => {
  return (dispatch) => {
    axios.get(profileURL(), ).then(res => dispatch(getPortfolios(res.data.portfolio_data.projects, res.data.all_categories)))
      .catch(err => err.response);
  }
}

export const getDemoPortfoliosAction = () => {
  const {portfolios, categoriesData} = ProfileData;
  return (dispatch) => {
    dispatch(getPortfolios(portfolios, categoriesData))
  }
}
