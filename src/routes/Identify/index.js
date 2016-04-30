import { injectReducer } from 'store/reducers'
import IdentifyForm from './containers/IdentifyForm'
import reducer from './reducers'

export default (store) => {
  injectReducer(store, { key: 'identify', reducer })
  return {
    path: 'identify',
    component: IdentifyForm
  }
}
