import {
  BLOGS_REMOVE
} from "../actionTypes/blogTypes";
import {ProfileData} from "../../../API/mock/profile/profileData";

const initialState = {
  blogs: ProfileData.blogs
}

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case BLOGS_REMOVE:
      return {
        ...state,
        blogs: action.payload
      }
    default:
      return state
  }
}