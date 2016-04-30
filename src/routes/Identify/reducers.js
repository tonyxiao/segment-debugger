import { IDENTIFY_RESPONSE } from './actionTypes'

const identifyReducer = (state = null, action) => {
  switch (action.type) {
    case IDENTIFY_RESPONSE:
      return action.payload
    default:
      return state
  }
}

export default identifyReducer
