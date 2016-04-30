import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { createValidator, required } from 'utils/validation'

import IdentifyForm from '../components/IdentifyForm'

const mapStateToProps = (state) => ({
})

const validate = ({userId, traits = '{}'}) => {
  console.log('validating', userId, traits)
  if (!userId) {
    return {_error: 'userId is required.'}
  }
  try {
    JSON.parse(traits)
  } catch (err) {
    return {_error: `${err}`}
  }
  return {}
}

export default connect(mapStateToProps)(
  reduxForm({
    form: 'identify',
    fields: ['userId', 'traits'],
    initialValues: {
      userId: 'tonyx',
      traits: JSON.stringify({
        firstName: 'Tony',
        lastName: 'Xiao'
      }, null, 4)
    },
    validate: validate,
    onSubmit: ({userId, traits}) => {
      const parsedTraits = JSON.parse(traits)
      console.log('identify', userId, parsedTraits)
      // Already validated by this point
      analytics.identify(userId, parsedTraits)
    }
  })(IdentifyForm)
)
