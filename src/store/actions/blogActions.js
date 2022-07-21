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
      dispatch(blogsRemove());
      dispatch(getBlogsAction({id: userID}));
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

  const data = {
    "user": {
      "blogs_attributes": [
        {
          "id": currentBlog.id,
          "title": currentBlog.title,
          "body": currentBlog.body,
          "reading_time": currentBlog.readTime,
          "categorizations_attributes": [...addCategories, ...deleteCategories]
        }
      ]
    }
  }

  return (dispatch) => {
    axios.patch(profileUrl, data)
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

export const getBlogsAction = (values) => {
  const {id} = values
  return (dispatch) => {
    axios.get(profileUrl, {
      params: {
        user_id: id
      }
    }).then(res => {
      dispatch(getBlogs({allBlogs: res.data.blogs, allCategories: res.data.all_categories}));
    })
      .catch(err => err.response);
  }

}
