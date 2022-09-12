import axios from "axios";

import {SET_PARENT_MESSAGES, SET_PRIVATE_MESSAGES} from "../actionTypes/messageTypes";

const parentMessageUrl = process.env.NEXT_PUBLIC_SHOW_ALL_MESSAGE_URL
const privateConversationUrl = process.env.NEXT_PUBLIC_PRIVATE_CONVERSATION_URL


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

export const setPrivateConversations = (messages) => {
  return {
    type: SET_PRIVATE_MESSAGES,
    payload: messages
  }
}

export const getPrivateConversations = (parent_id) => {

    const data = {
      "message": {
        "id": parent_id
      }
    }

  return async (dispatch) => {
    const response = axios.post(privateConversationUrl,data)
      .then(res => dispatch(setPrivateConversations(res.data.all_threads)))
      .catch(err => err.response)
    return (response);
  }
}
