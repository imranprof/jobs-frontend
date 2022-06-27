import {SHOW_BLOGS} from "../actionTypes/blogTypes";
import {BLOGS_REMOVE} from "../actionTypes/blogTypes";

export const showBlog = (blog) => {
  return {
    type: SHOW_BLOGS,
    payload: blog
  }
}

export const blogsRemove = (blogs) => {
  return {
    type: BLOGS_REMOVE,
    payload: blogs
  }
}