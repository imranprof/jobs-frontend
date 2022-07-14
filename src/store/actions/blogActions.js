import axios from "axios";
import {
  BLOGS_REMOVE,
  UPDATE_BLOG,
  GET_BLOGS
} from "../actionTypes/blogTypes";

export const blogsRemove = (blogs) => {
  return {
    type: BLOGS_REMOVE,
    payload: blogs
  }
}
const profileUrl = process.env.NEXT_PUBLIC_PROFILE_URL;

export const updateBlog = (id, categories, title, description, readTime) => {
  return {
    type: UPDATE_BLOG,
    payload: {blog_id: id, categories: categories, title: title, description: description, readTime: readTime}
  }
}

export const getBlogs = (blogs) => {
  return {
    type: GET_BLOGS,
    payload: blogs
  }
}

export const getBlogsAction = (values) => {
  const {id, dispatch} = values
  return () => {
    axios.get(profileUrl, {
      params: {
        user_id: id
      }
    }).then(res => {
      dispatch(getBlogs(res.data.blogs));
    })
      .catch(err => err.response);
  }

}
