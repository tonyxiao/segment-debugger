import { injectReducer } from 'store/reducers'
import AliasForm from './containers/AliasContainer'
import reducer from './reducers'

export default (store) => {
  injectReducer(store, { key: 'alias', reducer })
  return {
    path: 'alias',
    component: AliasForm
  }
}
