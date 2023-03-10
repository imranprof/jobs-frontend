
const initialState = {
  initialLoader: true,
  parentMessageList: [],
  privateMessageList: [],
  sendMessageData: {},
  total_notification_count: ''
}

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PARENT_MESSAGES':
      return {
        ...state,
        initialLoader: false,
        parentMessageList: action.payload
      }
    case 'SET_PRIVATE_MESSAGES':
      return {
        ...state,
        privateMessageList: action.payload
      }
    case 'SET_SEND_MESSAGE_DATA':
      return {
        ...state,
        sendMessageData: action.payload
      }
    case 'SET_TOTAL_NOTIFICATION_COUNT':
      return {
        ...state,
        total_notification_count: action.payload
      }
    default:
      return state
  }
}
