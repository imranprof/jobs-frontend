import {
  BLOGS_REMOVE,
  GET_BLOGS,
  UPDATE_BLOG
} from "../actionTypes/blogTypes";

const initialState = {
  allBlogs: []
}

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {

    case BLOGS_REMOVE:
      return {
        ...state,
        allBlogs: action.payload
      }

    case UPDATE_BLOG:
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
      return {
        ...state,
        allBlogs: action.payload
      }


    default:
      return state
  }
}
