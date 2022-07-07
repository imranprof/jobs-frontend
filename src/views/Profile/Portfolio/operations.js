import axios from "axios";

const portfoliosURL = process.env.NEXT_PUBLIC_PORTFOLIOS_URL

export function getPortfoliosData(values) {
  const {id} = values
  return axios.get(portfoliosURL, {
    params: {
      user_id: id
    }
  }).then(res => res.data)
    .catch(err => err.response);
}

export function deletePortfolio(portfolio_id) {
  const data = {
    "user": {
      "projects_attributes": [
        {
          "id": portfolio_id,
          "_destroy": true
        }
      ]
    }
  }
  return axios.get(portfoliosURL, {
    data: data
  }).then(res => res.data)
    .catch(err => err.response);
}