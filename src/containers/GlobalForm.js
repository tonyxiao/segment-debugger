import { compose } from 'recompose'
import { reduxForm } from 'redux-form'
import { createValidator, required } from 'utils/validation'
import GlobalForm from '../components/GlobalForm'

const formConfig = {
  form: 'global',
  fields: ['writeKey', 'sdk'],
  initialValues: {
    writeKey: 'dMCgkHYgAAhLeFYjG1uc46JLvohsWWRx',
    sdk: 'node'
  },
  validate: createValidator({
    writeKey: [required]
  })
}
export default compose(
  reduxForm(formConfig)
)(GlobalForm)
