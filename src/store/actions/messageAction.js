import axios from "axios";

import {
  SET_PARENT_MESSAGES,
  SET_PRIVATE_MESSAGES,
  SET_SEND_MESSAGE_DATA,
  SET_TOTAL_NOTIFICATION_COUNT
} from "../actionTypes/messageTypes";

const parentMessageUrl = process.env.NEXT_PUBLIC_SHOW_ALL_MESSAGE_URL
const privateConversationUrl = process.env.NEXT_PUBLIC_PRIVATE_CONVERSATION_URL
const sendMessageUrl = process.env.NEXT_PUBLIC_SEND_MESSAGE_URL
const messageStatusUrl = process.env.NEXT_PUBLIC_UPDATE_MESSAGE_STATUS_URL


export const setParentMessages = (messages) => {
  return {
    type: SET_PARENT_MESSAGES,
    payload: messages
  }
}

export const getAllParentMessage = () => {

  return async (dispatch) => {
    const response = axios.post(parentMessageUrl)
      .then(res => {
        dispatch(setParentMessages(res.data.all_threads))
        dispatch(setNotificationCount(res.data.total_notification_count))
      })
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
      .then(res => {
        if(parent_message_id){
          dispatch(getPrivateConversations(parent_message_id))
        }
      })
      .catch(err => err.response)
    return (response);
  }
}

export const setNotificationCount = (count)=> {
  return {
    type: SET_TOTAL_NOTIFICATION_COUNT,
    payload: count
  }
}

export const updateMessageStatus = (parent_id) => {
  const data = {
    "message": {
      "id": parent_id
    }
  }
  return (dispatch) => {
    axios.patch(messageStatusUrl, data)
      .then(res => {
        dispatch(getAllParentMessage())
      })
      .catch(err => err.response)
  }
}

