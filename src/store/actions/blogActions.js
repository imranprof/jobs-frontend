import axios from "axios";

import {
  BLOGS_REMOVE,
  UPDATE_BLOG,
  GET_BLOGS
} from "../actionTypes/blogTypes";
import {getProfileSlug} from "../reducers/authReducers";
import {ProfileData} from "../../../API/mock/profile/profileData";

const profileURL = () => `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/profiles/${getProfileSlug()}`;

export const blogsRemove = () => {
  return {
    type: BLOGS_REMOVE
  }
}

export const blogsRemoveAction = (blogID) => {
  return (dispatch) => {
    axios.patch(profileURL(), {
      "user": {
        "blogs_attributes": [
          {
            "id": blogID,
            "_destroy": true
          }
        ]
      }
    }).then(res => {
      dispatch(blogsRemove());
      dispatch(getBlogsAction());
    })
      .catch(err => err.response);
  }
}

export const updateBlog = (blogs, categories) => {
  return {
    type: UPDATE_BLOG,
    payload: {
      allBlogs: blogs,
      allCategories: categories
    }
  }
}

export const updateBlogAction = (currentBlog, previousBlog) => {
  let deleteCategories = previousBlog.categories.map(
    category => {
      let flag = true;
      for (let i = 0; i < currentBlog.categories.length; i++) {
        if (currentBlog.categories[i].category_id === category.category_id) {
          flag = false;
        }
      }
      if (flag) return {
        id: category.id,
        _destroy: true
      }
    }
  )

  let addCategories = currentBlog.categories.map(
    category => {
      let flag = true;
      for (let i = 0; i < previousBlog.categories.length; i++) {
        if (previousBlog.categories[i].category_id === category.category_id) {
          flag = false;
        }
      }
      if (flag) return {
        category_id: category.category_id
      }
    }
  );

  let data = {
    "user": {
      "blogs_attributes": [
        {
          "id": currentBlog.id,
          "title": currentBlog.title,
          "body": currentBlog.body,
          "reading_time": currentBlog.readTime,
          "categorizations_attributes": [...addCategories, ...deleteCategories],
          "image": {"data": currentBlog.image}
        }
      ]
    }
  }
  if (!currentBlog.image) delete data.user.blogs_attributes[0].image;

  return (dispatch) => {
    axios.patch(profileURL(), data)
      .then(res => dispatch(updateBlog(res.data.blogs, res.data.all_categories)))
      .catch(err => err.response)
  }
}

export const getBlogs = (values) => {
  return {
    type: GET_BLOGS,
    payload: values
  }
}

export const getBlogsAction = () => {
  return (dispatch) => {
    axios.get(profileURL()).then(res => {
      dispatch(getBlogs({allBlogs: res.data.blogs, allCategories: res.data.all_categories}));
    })
      .catch(err => err.response);
  }
}

export const getDemoBlogsAction = () => {
  const {blogs, categoriesData} = ProfileData;
  return (dispatch) => {
    dispatch(getBlogs({allBlogs: blogs, allCategories: categoriesData}));
  }
}

export const addBlogAction = (blog) => {
  let data = {
    "user": {
      "blogs_attributes": [
        {
          "title": blog.title,
          "body": blog.body,
          "reading_time": blog.readTime,
          "categorizations_attributes": blog.categories.map((category) => ({
            category_id: category.category_id
          })),
          "image": {"data": blog.image}
        }
      ]
    }
  }
  if (!blog.image) delete data.user.blogs_attributes[0].image;

  return (dispatch) => {
    axios.patch(profileURL(), data)
      .then(res => dispatch(updateBlog(res.data.blogs, res.data.all_categories)))
      .catch(err => err.response)
  }
}
