import { compose } from 'recompose'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createValidator, required, validJson } from 'utils/validation'
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
  onSubmit: ({userId, traitsJson}) => {
    const traits = JSON.parse(traitsJson)
    console.log('identify', userId, traits)
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
        traits
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
