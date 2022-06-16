import {HEADLINE_TEXT, HEADLINE_EDIT_MODE, INTRO_TEXT, EXPERTISE_VALUES, BIO_TEXT, BIO_EDIT_MODE, SOCIAL_LINKS_UPDATE, SKILLS_VALUES} from "../actionTypes/editProfileTypes";

// ***TopSection***
// Headline
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

// Intro
export const introText = (intro) => {
  return {
    type: INTRO_TEXT,
    payload: intro
  }
}

// IntroExpertises
export const expertisesText = (expertises) => {
  return {
    type: EXPERTISE_VALUES,
    payload: expertises
  }
}

// Bio
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

// Social Links
export const socialLinksUpdate = (links) => {
  return {
    type: SOCIAL_LINKS_UPDATE,
    payload: links
  }
}

// Skills
export const skillsUpdate = (skills) => {
  return {
    type: SKILLS_VALUES,
    payload: skills
  }
}
