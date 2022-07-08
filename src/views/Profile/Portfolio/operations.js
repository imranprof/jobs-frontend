import axios from "axios";

const portfoliosURL = process.env.NEXT_PUBLIC_PORTFOLIOS_URL;

export function getPortfoliosData(values) {
  const {id} = values
  return axios.get(portfoliosURL, {
    params: {
      user_id: id
    }
  }).then(res => res.data)
    .catch(err => err.response);
}

export function deletePortfolio(portfolio_id, deletePortfolio) {
  axios.patch(portfoliosURL, {
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
          "categorizations_attributes": updatedPortfolio.categories.map(
            (category) => {
              return {
                "category_id": category.id,
              }
            }
          )
        }
      ]
    }
  }

  axios.patch(portfoliosURL, data).then(res => updatePortfolio(res.data.portfolio_data.projects))
    .catch(err => err.response);
}