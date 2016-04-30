import { ALIAS_RESPONSE } from './actionTypes'

export default (state = null, action) => {
  switch (action.type) {
    case ALIAS_RESPONSE:
      return action.payload
    default:
      return state
  }
}
