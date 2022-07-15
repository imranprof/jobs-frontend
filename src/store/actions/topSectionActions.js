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
