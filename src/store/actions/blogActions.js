import axios from "axios";
import {
  BLOGS_REMOVE,
  UPDATE_BLOG,
  GET_BLOGS
} from "../actionTypes/blogTypes";

const profileUrl = process.env.NEXT_PUBLIC_PROFILE_URL;

export const blogsRemove = () => {
  return {
    type: BLOGS_REMOVE
  }
}

export const blogsRemoveAction = (values) => {
  const {blogID, userID} = values
  console.log(userID, blogID)
  return (dispatch) => {
    axios.patch(profileUrl, {
      "user": {
        "blogs_attributes": [
          {
            "id": blogID,
            "_destroy": true
          }
        ]
      }
    }).then(res => {
      console.log(res)
      dispatch(blogsRemove());
      dispatch(getBlogsAction({id: userID}));
    })
        .catch(err => err.response);
  }
}

export const updateBlog = (id, categories, title, description, readTime) => {
  return {
    type: UPDATE_BLOG,
    payload: {blog_id: id, categories: categories, title: title, description: description, readTime: readTime}
  }
}

export const getBlogs = (values) => {
  return {
    type: GET_BLOGS,
    payload: values
  }
}

export const getBlogsAction = (values) => {
  const {id} = values
  return (dispatch) => {
    axios.get(profileUrl, {
      params: {
        user_id: id
      }
    }).then(res => {
      dispatch(getBlogs({blogs: res.data.blogs, categories: res.data.all_categories}));
    })
      .catch(err => err.response);
  }

}
