import { compose } from 'recompose'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createValidator, required, validJson } from 'utils/validation'
import { identify } from 'actions'
import IdentifyForm from '../components/IdentifyForm'
import { IDENTIFY_RESPONSE } from '../actionTypes'

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
    // Clear the cached response first
    dispatch({type: IDENTIFY_RESPONSE, payload: null})
    const traits = JSON.parse(traitsJson)
    return dispatch(identify({
      userId,
      traits
    }))
    .then((resJson) => {
      // dispatch another action to get response to display on screen
      dispatch({type: IDENTIFY_RESPONSE, payload: resJson})
    })
  }
}

const mapStateToProps = (state) => ({
  responseJson: state.identify
})

export default compose(
  reduxForm(formConfig, mapStateToProps)
)(IdentifyForm)
