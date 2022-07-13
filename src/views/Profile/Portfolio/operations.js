import axios from "axios";

const profileURL = process.env.NEXT_PUBLIC_PROFILE_URL;

export function getPortfoliosData(values) {
  const {id} = values
  return axios.get(profileURL, {
    params: {
      user_id: id
    }
  }).then(res => res.data)
    .catch(err => err.response);
}

export function deletePortfolio(portfolio_id, deletePortfolio) {
  axios.patch(profileURL, {
    "user": {
      "projects_attributes": [
        {
          "id": portfolio_id,
          "_destroy": true
        }
      ]
    }
  }).then(res => deletePortfolio(res.data.portfolio_data.projects))
    .catch(err => err.response);
}

export function update(oldPortfolio, updatedPortfolio, updatePortfolio) {
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

  axios.patch(profileURL, data).then(res => updatePortfolio(res.data.portfolio_data.projects))
    .catch(err => err.response);
}