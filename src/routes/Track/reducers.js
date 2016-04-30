import { TRACK_RESPONSE } from './actionTypes'

export default (state = null, action) => {
  switch (action.type) {
    case TRACK_RESPONSE:
      return action.payload
    default:
      return state
  }
}

