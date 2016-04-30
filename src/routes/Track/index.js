import { injectReducer } from 'store/reducers'
import TrackForm from './containers/TrackContainer'
import reducer from './reducers'

export default (store) => {
  injectReducer(store, { key: 'track', reducer })
  return {
    path: 'track',
    component: TrackForm
  }
}
