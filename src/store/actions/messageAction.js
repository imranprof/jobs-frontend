import axios from "axios";

import {SET_PARENT_MESSAGES, SET_PRIVATE_MESSAGES, SET_SEND_MESSAGE_DATA} from "../actionTypes/messageTypes";

const parentMessageUrl = process.env.NEXT_PUBLIC_SHOW_ALL_MESSAGE_URL
const privateConversationUrl = process.env.NEXT_PUBLIC_PRIVATE_CONVERSATION_URL
const sendMessageUrl = process.env.NEXT_PUBLIC_SEND_MESSAGE_URL


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

export const setSendMessageData = (data) => {
  return {
    type: SET_SEND_MESSAGE_DATA,
    payload: data
  }
}

export const sendMessageAction = (messageData) => {

  const {body, recipient_id, parent_message_id} = messageData

  const data = {
    "message": {
      "body": body,
      "recipient_id": recipient_id,
      "parent_message_id": parent_message_id
    }
  }

  return async (dispatch) => {
    const response = axios.post(sendMessageUrl, data)
      .then(res => dispatch(getPrivateConversations(parent_message_id)))
      .catch(err => err.response)
    return (response);
  }
}

