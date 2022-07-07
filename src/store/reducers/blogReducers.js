import {
  BLOGS_REMOVE,
  UPDATE_BLOG
} from "../actionTypes/blogTypes";
import {ProfileData} from "../../../API/mock/profile/profileData";

const initialState = ProfileData.blogs

export const blogReducer = (blogs = initialState, action) => {
  switch (action.type) {

    case BLOGS_REMOVE:
      return action.payload

    case UPDATE_BLOG:
      return blogs.map(blog=> {
        if(blog.id === action.payload.blog_id){
          blog.categories = action.payload.categories,
          blog.title = action.payload.title,
          blog.description = action.payload.description
          blog.readTime = action.payload.readTime
        }
        return blog;
      })

    default:
      return blogs
  }
}
