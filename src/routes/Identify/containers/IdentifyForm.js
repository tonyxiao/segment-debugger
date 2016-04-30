import { compose } from 'recompose'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createValidator, required, validJson } from 'utils/validation'
import { identify } from 'actions'
import IdentifyForm from '../components/IdentifyForm'

const formConfig = {
  form: 'identify',
  fields: ['userId', 'traitsJson'],
  initialValues: {
    userId: 'tonyx',
    traitsJson: JSON.stringify({
      firstName: 'Tony',
      lastName: 'Xiao'
    }, null, 4)
  },
  validate: createValidator({
    userId: [required],
    traitsJson: [required, validJson]
  }),
  onSubmit: ({userId, traitsJson}, dispatch) => {
    // params Already validated
    const traits = JSON.parse(traitsJson)
    return dispatch(identify({
      userId,
      traits
    }))
  }
}

export default compose(
  reduxForm(formConfig)
)(IdentifyForm)
