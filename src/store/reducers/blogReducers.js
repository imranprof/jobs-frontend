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
      console.log(state.allBlogs)
      return state.allBlogs.map(blog=> {
        if(blog.id === action.payload.blog_id){
          blog.categories = action.payload.categories,
          blog.title = action.payload.title,
          blog.description = action.payload.description
          blog.readTime = action.payload.readTime
        }
        return blog;
      })

    case GET_BLOGS:
      const {blogs, categories} = action.payload
      return {
        ...state,
        allBlogs: blogs,
        allCategories: categories
      }

    default:
      return state
  }
}
