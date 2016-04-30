import { compose } from 'recompose'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createValidator, required } from 'utils/validation'
import IdentifyForm from '../components/IdentifyForm'

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

const formConfig = {
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
    // analytics.identify(userId, parsedTraits)
    const baseUrl = '/api/identify/dMCgkHYgAAhLeFYjG1uc46JLvohsWWRx'
    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId,
        traits: parsedTraits
      })
    })
  }
}

const mapStateToProps = (state) => ({
})

export default compose(
  reduxForm(formConfig),
  connect(mapStateToProps)
)(IdentifyForm)
