import { compose } from 'recompose'
import { reduxForm } from 'redux-form'
import GlobalForm from '../components/GlobalForm'

const formConfig = {
  form: 'global',
  fields: ['writeKey', 'sdk'],
  initialValues: {
    writeKey: 'dMCgkHYgAAhLeFYjG1uc46JLvohsWWRx',
    sdk: 'node'
  }
}
export default compose(
  reduxForm(formConfig)
)(GlobalForm)
