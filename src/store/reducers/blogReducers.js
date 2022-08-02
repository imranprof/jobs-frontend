import {
  BLOGS_REMOVE,
  GET_BLOGS,
  UPDATE_BLOG
} from "../actionTypes/blogTypes";
import {getProfileSlug} from "./authReducers";
import {ProfileData} from "../../../API/mock/profile/profileData";

const initialState = () => {
  if (getProfileSlug())
    return {
      allBlogs: [],
      allCategories: []
    }
  else return {
    allBlogs: ProfileData.blogs,
    allCategories: ProfileData.categoriesData
  }
}

export const blogReducer = (state = initialState(), action) => {
  switch (action.type) {

    case BLOGS_REMOVE:
      return {
        ...state
      }

    case UPDATE_BLOG:
      return {
        ...state,
        ...action.payload
      }

    case GET_BLOGS:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}
