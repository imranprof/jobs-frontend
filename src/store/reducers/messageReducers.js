
const initialState = {
  initialLoader: true,
  parentMessageList: []
}

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PARENT_MESSAGES':
      return {
        ...state,
        initialLoader: false,
        parentMessageList: action.payload
      }
    default:
      return state
  }
}
