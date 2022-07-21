import {
  BLOGS_REMOVE,
  GET_BLOGS,
  UPDATE_BLOG
} from "../actionTypes/blogTypes";

const initialState = {
  allBlogs: [],
  allCategories: []
}

export const blogReducer = (state = initialState, action) => {
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
