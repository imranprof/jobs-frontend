import {
  BLOGS_REMOVE,
  UPDATE_TITLE
} from "../actionTypes/blogTypes";
import {ProfileData} from "../../../API/mock/profile/profileData";

const initialState = ProfileData.blogs

export const blogReducer = (blogs = initialState, action) => {
  switch (action.type) {
    case BLOGS_REMOVE:
      console.log(action.payload);
      return action.payload
    case UPDATE_TITLE:
      return blogs.map(blog=> {
        if(blog.id === action.payload.blog_id){
          blog.title = action.payload.title
        }
        return blog;
      })

    default:
      return blogs
  }
}

