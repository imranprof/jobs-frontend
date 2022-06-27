import {REMOVE_PORTFOLIO} from "../actionTypes/portfolioTypes";
import {ProfileData} from "../../../API/mock/profile/profileData";

const initialState = ProfileData.portfolios;

export const portfolioReducer = (portfolios = initialState, action) => {
  switch (action.type) {
    case REMOVE_PORTFOLIO:
      return action.payload
    default:
      return portfolios
  }
}
