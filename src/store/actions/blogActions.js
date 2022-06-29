import {
  BLOGS_REMOVE,
  BLOG_TITLE, BLOG_DESCRIPTION, BLOG_CATEGORIES
} from "../actionTypes/blogTypes";

export const blogsRemove = (blogs) => {
  return {
    type: BLOGS_REMOVE,
    payload: blogs
  }
}

export const updateTitle = (title, blog_id) => {
  return {
    type: BLOG_TITLE,
    payload: {blog_id: blog_id, title: title}
  }
}

export const updateDescription = (id, description) => {
  return {
    type: BLOG_DESCRIPTION,
    payload: {blog_id: id, description: description}
  }
}

export const updateCategories = (id, categories) => {
  return {
    type: BLOG_CATEGORIES,
    payload: {blog_id: id, categories: categories}
  }
}
