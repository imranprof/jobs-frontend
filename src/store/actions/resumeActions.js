import axios from "axios";
import {RESUME_UPDATE, RESUME_ITEM_REMOVE, GET_RESUME} from "../actionTypes/resumeTypes";

const profileURL = process.env.NEXT_PUBLIC_PROFILE_URL;

export const getResume = (resume) => {
  return {
    type: GET_RESUME,
    payload: {
      resume: resume,
    }
  }
}

export const getResumeAction = (values) => {
  const {id} = values
  return (dispatch) => {
    axios.get(profileURL, {
      params: {
        user_id: id
      }
    }).then(res => dispatch(getResume(res.data.resume_data)))
      .catch(err => err.response);
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
        institution: resumeItem.title,
        description: resumeItem.description,
        start_date: `${resumeItem.startYear}-${getMonthNumber(resumeItem.startMonth)}-01`,
        end_date: `${resumeItem.endYear}-${getMonthNumber(resumeItem.endMonth)}-01`
      }
      break;
    case "experiences":
      itemType = "work_histories_attributes";
      attributes = {
        id: resumeItem.id,
        title: resumeItem.title,
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
    axios.patch(profileURL, {
      "user": {
        [itemType]: [
          {
            ...attributes
          }
        ]
      }
    }).then(res => dispatch(resumeUpdate(res.data.resume_data)))
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
    axios.patch(profileURL, {
      "user": {
        [item]: [
          {
            "id": id,
            "_destroy": true
          }
        ]
      }
    }).then(res => dispatch(resumeItemRemove(res.data.resume_data)))
      .catch(err => err.response)
  }
}