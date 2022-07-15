import axios from "axios";

import {
  HEADLINE_TEXT,
  HEADLINE_EDIT_MODE,
  INTRO_TEXT,
  EXPERTISE_VALUES,
  BIO_TEXT,
  BIO_EDIT_MODE,
  SOCIAL_LINKS_UPDATE,
  SKILLS_VALUES, SET_PROFILE_ID, SET_NAME, SET_AVATAR,
} from "../actionTypes/topSectionTypes";

const profileURL = process.env.NEXT_PUBLIC_PROFILE_URL;

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
  return {
    type: SKILLS_VALUES,
    payload: skills
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

export function getProfileAction(userID) {
  return (dispatch) => {
    axios.get(profileURL, {
      params: {
        user_id: userID
      }
    }).then(res => {
      const {
        id,
        first_name,
        last_name,
        headline,
        title,
        bio,
        avatar,
        expertises,
        social_links,
        skills
      } = res.data.profile
      dispatch(setProfileID(id));
      dispatch(headlineText(headline));
      dispatch(setName({firstName: first_name, lastName: last_name}));
      dispatch(introText(title));
      dispatch(bioText(bio));
      dispatch(setAvatar(avatar));
      dispatch(expertisesText(expertises));
      dispatch(socialLinksUpdate(social_links));
      const topSkills = skills.sort(
        (skill1, skill2) => {
          return (skill2.rating - skill1.rating);
        }
      );
      dispatch(skillsUpdate(topSkills.slice(0, 3)));
    })
      .catch(err => err.data);
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
    axios.patch(profileURL, data)
      .then(res => dispatch(headlineText(res.data.profile.headline)))
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
    axios.patch(profileURL, data)
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
    axios.patch(profileURL, data)
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
    axios.patch(profileURL, data)
      .then(res => {
        dispatch(socialLinksUpdate(res.data.profile.social_links));
      })
      .catch(err => err.response);
  }
}
