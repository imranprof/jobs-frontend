import axios from "axios";

import {
  HEADLINE_TEXT,
  HEADLINE_EDIT_MODE,
  INTRO_TEXT,
  EXPERTISE_VALUES,
  BIO_TEXT,
  BIO_EDIT_MODE,
  SOCIAL_LINKS_UPDATE,
  SKILLS_VALUES,
  SET_PROFILE_ID,
  SET_NAME,
  SET_AVATAR,
  SET_LOADER,
  SET_ROLE,
  SET_PRIVATE_INFO, SET_ROLE_MODIFY_PERMISSION,
  SET_HOURLY_RATE
} from "../actionTypes/topSectionTypes";
import {getProfileSlug} from "../reducers/authReducers";
import {setEditPermission} from "./authAction";
import {ProfileData} from "../../../API/mock/profile/profileData"
import {getContactAction} from "./contactActions";
import {getPrivateSlug} from "../../auth/operations";
import {setPrivateRole} from "../../auth/operations";

const profileURL = () => `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/profiles/${getProfileSlug()}`;
const privateProfileURL = () => `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/profiles/${getPrivateSlug()}`;

export const setProfileID = (id) => {
  return {
    type: SET_PROFILE_ID,
    payload: id
  }
}

export const headlineText = (headline) => {
  return {
    type: HEADLINE_TEXT,
    payload: headline
  }
}

export const headlineEditMode = (boolean) => {
  return {
    type: HEADLINE_EDIT_MODE,
    payload: boolean
  }
}

export const introText = (intro) => {
  return {
    type: INTRO_TEXT,
    payload: intro
  }
}

export const expertisesText = (expertises) => {
  return {
    type: EXPERTISE_VALUES,
    payload: expertises
  }
}

export const bioText = (bio) => {
  return {
    type: BIO_TEXT,
    payload: bio
  }
}

export const bioEditMode = (boolean) => {
  return {
    type: BIO_EDIT_MODE,
    payload: boolean
  }
}

export const socialLinksUpdate = (links) => {
  return {
    type: SOCIAL_LINKS_UPDATE,
    payload: links
  }
}

export const skillsUpdate = (skills) => {
  const topSkills = skills.sort(
    (skill1, skill2) => {
      return (skill2.rating - skill1.rating);
    }
  );
  return {
    type: SKILLS_VALUES,
    payload: topSkills.slice(0, 3)
  }
}

export const setName = (values) => {
  return {
    type: SET_NAME,
    payload: values
  }
}

export const setAvatar = (avatar) => {
  return {
    type: SET_AVATAR,
    payload: avatar
  }
}

export const setRole = (role) =>{
  return {
    type: SET_ROLE,
    payload: role
  }
}

export const setPrivateProfileInfo = (info) =>{
  return {
    type: SET_PRIVATE_INFO,
    payload: info
  }
}

export const setRoleModifyPermission = (choice) =>{
  return {
    type: SET_ROLE_MODIFY_PERMISSION,
    payload: choice
  }
}

export const getPrivateProfileAction = () => {
  return (dispatch) => {
    axios.get(privateProfileURL()).then(res => {
      dispatch(setPrivateProfileInfo(res.data.profile));
    })
  }
}

export const setHourlyRate = (rate) => {
  return {
    type: SET_HOURLY_RATE,
    payload: rate
  }
}

export function getProfileAction() {
  return (dispatch) => {
    axios.get(profileURL()).then(res => {
      const {
        id,
        first_name,
        last_name,
        headline,
        hourly_rate,
        title,
        bio,
        avatar,
        expertises,
        social_links,
        skills
      } = res.data.profile
      dispatch(setEditPermission(res.data.edit_permission));
      dispatch(setProfileID(id));
      dispatch(headlineText(headline));
      dispatch(setHourlyRate(hourly_rate));
      dispatch(setName({firstName: first_name, lastName: last_name}));
      dispatch(introText(title));
      dispatch(bioText(bio));
      dispatch(setAvatar(avatar));
      dispatch(expertisesText(expertises));
      dispatch(socialLinksUpdate(social_links));
      dispatch(skillsUpdate(skills));
      dispatch(setLoader(false));
      dispatch(setRoleModifyPermission(res.data.modify_permission))
      setPrivateRole(res.data.role)
      dispatch(setRole(res.data.role))
      dispatch(getContactAction())
    })
      .catch(err => err.data);
  }
}

const {firstName, lastName, headline, intro, bio, expertises, socialLinks, skills, avatar} = ProfileData;

export function getDemoProfileAction() {
  return (dispatch) => {
    dispatch(setEditPermission(false));
    dispatch(setProfileID(null));
    dispatch(headlineText(headline));
    dispatch(setName({firstName: firstName, lastName: lastName}));
    dispatch(introText(intro));
    dispatch(bioText(bio));
    dispatch(setAvatar(avatar));
    dispatch(expertisesText(expertises));
    dispatch(socialLinksUpdate(socialLinks));
    dispatch(skillsUpdate(skills));
    dispatch(setLoader(false));
  }
}

export const uploadAvatar = ({base64Image, profileID}) => {
  const data = {
    "user": {
      "user_profile_attributes": {
        "id": profileID,
        "avatar": {"data": base64Image}
      }
    }
  }
  return (dispatch) => {
    axios.patch(profileURL(), data)
      .then(res => {
        dispatch(setAvatar(res.data.profile.avatar))
      })
      .catch(err => err.response);
  }
}

export const updateHeadline = ({headline, profileID}) => {
  const data = {
    "user": {
      "user_profile_attributes": {
        "id": profileID,
        "headline": headline
      }
    }
  }

  return (dispatch) => {
    axios.patch(profileURL(), data)
      .then(res => dispatch(headlineText(res.data.profile.headline)))
      .catch(err => err.response);
  }
}

export const updateHourlyRate = ({rate, profileID}) => {
  const data = {
    "user": {
      "user_profile_attributes": {
        "id": profileID,
        "hourly_rate": rate
      }
    }
  }
  return (dispatch) => {
    axios.patch(profileURL(), data)
      .then(res => dispatch(setHourlyRate(res.data.profile.hourly_rate)))
      .catch(err => err.response);
  }
}

export const updateBio = ({bio, profileID}) => {
  const data = {
    "user": {
      "user_profile_attributes": {
        "id": profileID,
        "bio": bio
      }
    }
  }

  return (dispatch) => {
    axios.patch(profileURL(), data)
      .then(res => dispatch(bioText(res.data.profile.bio)))
      .catch(err => err.response);
  }
}

export const updateIntroAndExpertises = ({intro, expertises, profileID}) => {
  const data = {
    "user": {
      "user_profile_attributes": {
        "id": profileID,
        "title": intro,
        "expertises": expertises
      }
    }
  }

  return (dispatch) => {
    axios.patch(profileURL(), data)
      .then(res => {
        dispatch(introText(res.data.profile.title));
        dispatch(expertisesText(res.data.profile.expertises));
      })
      .catch(err => err.response);
  }
}

export const socialLinksUpdateAction = ({socialLinks, profileID}) => {
  const data = {
    "user": {
      "user_profile_attributes": {
        "id": profileID,
        "social_link_attributes": {
          "id": socialLinks.id,
          "facebook": socialLinks.facebook,
          "github": socialLinks.github,
          "linkedin": socialLinks.linkedin
        }
      }
    }
  }

  return (dispatch) => {
    axios.patch(profileURL(), data)
      .then(res => {
        dispatch(socialLinksUpdate(res.data.profile.social_links));
      })
      .catch(err => err.response);
  }
}

export const setLoader = (boolean) => {
  return {
    type: SET_LOADER,
    payload: boolean
  }
}
