import axios from "axios";

import {RESUME_UPDATE, RESUME_ITEM_REMOVE, GET_RESUME, GET_ALL_SKILLS} from "../actionTypes/resumeTypes";
import {skillsUpdate} from "./topSectionActions";
import {getProfileSlug} from "../reducers/authReducers";
import {ProfileData} from "../../../API/mock/profile/profileData";

const profileURL = () => `${process.env.NEXT_PUBLIC_APP_URL}/api/v1p1/profiles/${getProfileSlug()}`;

export const getResume = (resume) => {
  return {
    type: GET_RESUME,
    payload: {
      resume: resume,
    }
  }
}

export const getAllSkills = (allSkills) => {
  return {
    type: GET_ALL_SKILLS,
    payload: allSkills
  }
}

export const getResumeAction = () => {
  return (dispatch) => {
    axios.get(profileURL()).then(res => {
      dispatch(getResume(res.data.resume_data));
      dispatch(getAllSkills(res.data.all_skills));
    })
      .catch(err => err.response);
  }
}

export const getDemoResumeAction = () => {
  const {resume, skills} = ProfileData;
  return (dispatch) => {
    dispatch(getResume(resume));
    dispatch(getAllSkills(skills));
  }
}

export const resumeUpdate = (resume) => {
  return {
    type: RESUME_UPDATE,
    payload: resume
  }
}

const getMonthNumber = (shortName) => {
  switch (shortName) {
    case "Jan":
      return 1;
    case "Feb":
      return 2;
    case "Mar":
      return 3;
    case "Apr":
      return 4;
    case "May":
      return 5;
    case "Jun":
      return 6;
    case "Jul":
      return 7;
    case "Aug":
      return 8;
    case "Sep":
      return 9;
    case "Oct":
      return 10;
    case "Nov":
      return 11;
    case "Dec":
      return 12;
    default:
      throw new Error("invalid short month name");
  }
}

export const resumeUpdateAction = ({resumeItem, cardType}) => {
  let itemType, attributes;
  switch (cardType) {
    case "educations":
      itemType = "education_histories_attributes";
      attributes = {
        id: resumeItem.id,
        institution: resumeItem.institution,
        description: resumeItem.description,
        start_date: `${resumeItem.startYear}-${getMonthNumber(resumeItem.startMonth)}-01`,
        end_date: `${resumeItem.endYear}-${getMonthNumber(resumeItem.endMonth)}-01`
      }
      break;
    case "experiences":
      itemType = "work_histories_attributes";
      attributes = {
        id: resumeItem.id,
        company_name: resumeItem.company_name,
        description: resumeItem.description,
        start_date: `${resumeItem.startYear}-${getMonthNumber(resumeItem.startMonth)}-01`,
        end_date: `${resumeItem.endYear}-${getMonthNumber(resumeItem.endMonth)}-01`
      }
      break;
    case "skills":
      itemType = "users_skills_attributes";
      attributes = {
        id: resumeItem.id,
        rating: resumeItem.rating
      }
      break;
    default:
      return;
  }
  return (dispatch) => {
    axios.patch(profileURL(), {
      "user": {
        [itemType]: [
          {
            ...attributes
          }
        ]
      }
    }).then(res => {
      dispatch(resumeUpdate(res.data.resume_data));
      if (cardType === "skills") dispatch(skillsUpdate(res.data.profile.skills));
    })
      .catch(err => err.response)
  }
}

export const addResumeItemAction = ({resumeItem, cardType}) => {
  let itemType, attributes;
  switch (cardType) {
    case "educations":
      itemType = "education_histories_attributes";
      attributes = {
        id: resumeItem.id,
        institution: resumeItem.institution,
        description: resumeItem.description,
        start_date: `${resumeItem.startYear}-${getMonthNumber(resumeItem.startMonth)}-01`,
        end_date: `${resumeItem.endYear}-${getMonthNumber(resumeItem.endMonth)}-01`,
        degree: "None",
        grade: "None",
        currently_enrolled: false,
        visibility: true
      }
      break;
    case "experiences":
      itemType = "work_histories_attributes";
      attributes = {
        company_name: resumeItem.company_name,
        description: resumeItem.description,
        start_date: `${resumeItem.startYear}-${getMonthNumber(resumeItem.startMonth)}-01`,
        end_date: `${resumeItem.endYear}-${getMonthNumber(resumeItem.endMonth)}-01`,
        title: "no title",
        currently_employed: false,
        visibility: true,
        employment_type: 1
      }
      break;
    case "skills":
      itemType = "users_skills_attributes";
      attributes = {
        skill_id: resumeItem.skill_id,
        rating: resumeItem.rating
      }
      break;
    default:
      return;
  }
  return (dispatch) => {
    axios.patch(profileURL(), {
      "user": {
        [itemType]: [
          {
            ...attributes
          }
        ]
      }
    }).then(res => {
      dispatch(getResume(res.data.resume_data));
      if (cardType === "skills") dispatch(skillsUpdate(res.data.profile.skills));
    })
      .catch(err => err.response)
  }
}

export const resumeItemRemove = (resume) => {
  return {
    type: RESUME_ITEM_REMOVE,
    payload: resume
  }
}

export const resumeItemRemoveAction = ({id, cardType}) => {
  let item;
  switch (cardType) {
    case "educations":
      item = "education_histories_attributes";
      break;
    case "experiences":
      item = "work_histories_attributes";
      break;
    case "skills":
      item = "users_skills_attributes";
      break;
    default:
      return;
  }
  return (dispatch) => {
    axios.patch(profileURL(), {
      "user": {
        [item]: [
          {
            "id": id,
            "_destroy": true
          }
        ]
      }
    }).then(res => {
      dispatch(resumeItemRemove(res.data.resume_data));
      dispatch(skillsUpdate(res.data.profile.skills));
    })
      .catch(err => err.response)
  }
}

export const addNewSkillAction = (title, rating) => {
  let data = {
    "user": {
      "users_skills_attributes": [
        {
          "skill_title": title,
          "rating": rating
        }
      ]
    }
  }
  return (dispatch) => {
    axios.patch(profileURL(), data).then(res => {
      dispatch(getResume(res.data.resume_data));
      dispatch(skillsUpdate(res.data.profile.skills));
    })
      .catch(err => err.response)
  }
}
