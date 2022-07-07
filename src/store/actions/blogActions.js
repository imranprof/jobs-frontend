import {
  BLOGS_REMOVE,
  UPDATE_BLOG
} from "../actionTypes/blogTypes";

export const blogsRemove = (blogs) => {
  return {
    type: BLOGS_REMOVE,
    payload: blogs
  }
}

export const updateBlog = (id, categories, title, description, readTime) => {
  return {
    type: UPDATE_BLOG,
    payload: {blog_id: id, categories: categories, title: title, description: description, readTime: readTime}
  }
}
