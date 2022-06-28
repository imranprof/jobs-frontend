import {
  BLOGS_REMOVE,
  BLOG_TITLE,
  BLOG_DESCRIPTION
} from "../actionTypes/blogTypes";
import {ProfileData} from "../../../API/mock/profile/profileData";

const initialState = ProfileData.blogs

export const blogReducer = (blogs = initialState, action) => {
  switch (action.type) {
    case BLOGS_REMOVE:
      console.log(action.payload);
      return action.payload
    case BLOG_TITLE:
      return blogs.map(blog=> {
        if(blog.id === action.payload.blog_id){
          blog.title = action.payload.title
        }
        return blog;
      })

    case BLOG_DESCRIPTION:
      return blogs.map(blog=> {
        if(blog.id === action.payload.blog_id){
          blog.description = action.payload.description
        }
        return blog;
      })

    default:
      return blogs
  }
}

