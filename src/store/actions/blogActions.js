import {
  BLOGS_REMOVE,
  UPDATE_BLOG_TITLE
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
    type: UPDATE_BLOG_TITLE,
    payload: {blog_id: blog_id, title: title}
  }
}
