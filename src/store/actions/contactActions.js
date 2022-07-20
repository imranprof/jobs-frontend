import axios from "axios";
import {
  DESIGNATION_UPDATE,
  DESIGNATION_EDIT_MODE,
  CONTACT_DESCRIPTION_UPDATE,
  CONTACT_DESCRIPTION_EDIT_MODE,
  PHONE_UPDATE,
  PHONE_EDIT_MODE,
  SET_EMAIL
} from "../actionTypes/contactTypes";
import {headlineText} from "./topSectionActions";

const profileURL = process.env.NEXT_PUBLIC_PROFILE_URL;

// Designation
export const designationUpdate = (designation) => {
  return {
    type: DESIGNATION_UPDATE,
    payload: designation
  }
}

export const designationEditMode = (boolean) => {
  return {
    type: DESIGNATION_EDIT_MODE,
    payload: boolean
  }
}

// Contact Description
export const contactDescriptionUpdate = (description) => {
  return {
    type: CONTACT_DESCRIPTION_UPDATE,
    payload: description
  }
}

export const contactDescriptionEditMode = (boolean) => {
  return {
    type: CONTACT_DESCRIPTION_EDIT_MODE,
    payload: boolean
  }
}

// Phone Number
export const phoneUpdate = (phone) => {
  return {
    type: PHONE_UPDATE,
    payload: phone
  }
}

export const phoneEditMode = (boolean) => {
  return {
    type: PHONE_EDIT_MODE,
    payload: boolean
  }
}

// Email
export const setEmail = (values) => {
  return {
    type: SET_EMAIL,
    payload: values
  }
}

export const getContactAction = (userID) => {
  return (dispatch) => {
    axios.get(profileURL, {
      params: {
        user_id: userID
      }
    }).then(res => {
      const {contact_email, phone} = res.data.contacts_data;
      dispatch(setEmail(contact_email));
      dispatch(phoneUpdate(phone));
    })
  }
}

export const designationUpdateAction = (profileID, designation) => {
  const data = {
    "user": {
      "user_profile_attributes": {
        "id": profileID,
        "designation": designation
      }
    }
  }

  return (dispatch) => {
    axios.patch(profileURL, data)
        .then(res => dispatch(designationUpdate(res.data.contacts_data.designation)))
        .catch(err => err.response);
  }
}

export const contactDescriptionUpdateAction = (profileID, contactInfo) => {
  const data = {
    "user": {
      "user_profile_attributes": {
        "id": profileID,
        "contact_info": contactInfo
      }
    }
  }

  return (dispatch) => {
    axios.patch(profileURL, data)
        .then(res => dispatch(designationUpdate(res.data.contacts_data.contact_info)))
        .catch(err => err.response);
  }
}

export const phoneUpdateAction = (phone) => {
  const data = {
    "user": {
      "phone": phone
    }
  }

  return (dispatch) => {
    axios.patch(profileURL, data)
        .then(res => dispatch(phoneUpdate(res.data.contacts_data.phone)))
        .catch(err => err.response);
  }
}


