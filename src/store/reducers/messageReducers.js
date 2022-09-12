
const initialState = {
  initialLoader: true,
  parentMessageList: [],
  privateMessageList: []
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
    default:
      return state
  }
}
