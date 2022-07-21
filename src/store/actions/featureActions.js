import axios from "axios";
import
{
  GET_FEATURES, UPDATE_FEATURE, REMOVE_FEATURE
}
  from "../actionTypes/featureTypes";

const profileURL = process.env.NEXT_PUBLIC_PROFILE_URL;

export const getFeatures = (features) => {
  return {
    type: GET_FEATURES,
    payload: {
      allFeatures: features,
    }
  }
}

export const getFeaturesAction = (values) => {
  const {id} = values
  return (dispatch) => {
    axios.get(profileURL, {
      params: {
        user_id: id
      }
    }).then(res => dispatch(getFeatures(res.data.features)))
      .catch(err => err.response);
  }
}

export const updateFeature = (features) => {
  return {
    type: UPDATE_FEATURE,
    payload: {
      allFeatures: features,
    }
  }
}

export const updateFeatureAction = (oldFeature, updatedFeature) => {
  const data = {
    "user": {
      "features_attributes": [
        {
          "id": updatedFeature.id,
          "title": updatedFeature.title,
          "description": updatedFeature.description,
        }
      ]
    }
  }
  return (dispatch) => {
    axios.patch(profileURL, data)
      .then(res => dispatch(updateFeature(res.data.features)))
      .catch(err => err.response)
  }
}

export const removeFeature = (features) => {
  return {
    type: REMOVE_FEATURE,
    payload: {
      allFeatures: features,
    }
  }
}

export const removeFeatureAction = (featureID) => {
  const data = {
    "user": {
      "features_attributes": [
        {
          "id": featureID,
          "_destroy": true
        }
      ]
    }
  }
  return (dispatch) => {
    axios.patch(profileURL, data)
      .then(res => dispatch(removeFeature(res.data.features)))
      .catch(err => err.response)
  }
}
