import axios from "axios";

import {
  DESIGNATION_UPDATE,
  DESIGNATION_EDIT_MODE,
  CONTACT_DESCRIPTION_UPDATE,
  CONTACT_DESCRIPTION_EDIT_MODE,
  PHONE_UPDATE,
  PHONE_EDIT_MODE,
  SET_EMAIL,
  LOCATION_UPDATE,
  LOCATION_EDIT_MODE
} from "../actionTypes/contactTypes";
import {getProfileSlug} from "../reducers/authReducers";
import {ProfileData} from "../../../API/mock/profile/profileData";

const profileURL = () => `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/profiles/${getProfileSlug()}`;
const contactURL = `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/profiles/contact`;

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

export const locationUpdate = (location) => {
  return {
    type: LOCATION_UPDATE,
    payload: location
  }
}

export const locationEditMode = (boolean) => {
  return {
    type: LOCATION_EDIT_MODE,
    payload: boolean
  }
}

export const setEmail = (values) => {
  return {
    type: SET_EMAIL,
    payload: values
  }
}

export const getContactAction = () => {
  return (dispatch) => {
    axios.get(profileURL()).then(res => {
      const {contact_email, phone, designation, description, location} = res.data.contacts_data;
      dispatch(setEmail(contact_email));
      dispatch(phoneUpdate(phone));
      dispatch(contactDescriptionUpdate(description));
      dispatch(designationUpdate(designation));
      dispatch(locationUpdate(location));
    })
  }
}

export const getDemoContactAction = () => {
  return (dispatch) => {
    const {email, phone, designation, contactDescription, location} = ProfileData;
    dispatch(setEmail(email));
    dispatch(phoneUpdate(phone));
    dispatch(contactDescriptionUpdate(contactDescription));
    dispatch(designationUpdate(designation))
    dispatch(locationUpdate(location));
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
    axios.patch(profileURL(), data)
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
    axios.patch(profileURL(), data)
      .then(res => dispatch(contactDescriptionUpdate(res.data.contacts_data.description)))
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
    axios.patch(profileURL(), data)
      .then(res => dispatch(phoneUpdate(res.data.contacts_data.phone)))
      .catch(err => err.response);
  }
}

export const locationUpdateAction = (profileID,  location) => {
  const data = {
    "user": {
      "user_profile_attributes": {
        "id": profileID,
        "location": location
      }
    }
  }

  return (dispatch) => {
    axios.patch(profileURL(), data)
      .then(res => dispatch(locationUpdate(res.data.contacts_data.location)))
      .catch(err => err.response);
  }
}

export const sendMessageAction = (values) => {
  const data = {
    user_contact: {
        name: values.name,
        phone_number: values.phone,
        email: values.email,
        subject: values.subject,
        message: values.message,
        user_id: values.userID,
        messenger_id: values.messengerId
    }
  }
  return (dispatch) => {
    axios.post(contactURL, data)
      .then(res => res)
      .catch(err => err.response);
  }

}
