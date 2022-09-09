import axios from "axios";

import {SET_PARENT_MESSAGES} from "../actionTypes/messageTypes";

const parentMessageUrl = process.env.NEXT_PUBLIC_SHOW_ALL_MESSAGE_URL


export const setParentMessages = (messages) => {
  return {
    type: SET_PARENT_MESSAGES,
    payload: messages
  }
}

export const getAllParentMessage = () => {

  return async (dispatch) => {
    const response = axios.post(parentMessageUrl)
      .then(res => dispatch(setParentMessages(res.data.all_threads)) )
      .catch(err => err.response)
    return (response);
  }
}
