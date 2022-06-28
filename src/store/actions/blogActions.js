import {
  BLOGS_REMOVE,
  UPDATE_TITLE
} from "../actionTypes/blogTypes";

export const blogsRemove = (blogs) => {
  return {
    type: BLOGS_REMOVE,
    payload: blogs
  }
}

export const updateTitle = (title, blog_id) => {
  console.log(blog_id);
  return {
    type: UPDATE_TITLE,
    payload: {blog_id: blog_id, title: title}
  }
}
