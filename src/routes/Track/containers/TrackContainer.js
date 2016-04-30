import { compose } from 'recompose'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createValidator, required, validJson } from 'utils/validation'
import { track } from 'actions'
import TrackForm from '../components/TrackForm'
import { TRACK_RESPONSE } from '../actionTypes'

const formConfig = {
  form: 'track',
  fields: ['userId', 'event', 'propertiesJson'],
  initialValues: {
    userId: 'tonyx',
    event: 'ADD TO CART',
    propertiesJson: JSON.stringify({
      quantity: 5,
      item: 'Hot Sauce'
    }, null, 4)
  },
  validate: createValidator({
    userId: [required],
    event: [required],
    propertiesJson: [validJson]
  }),
  onSubmit: ({userId, event, propertiesJson}, dispatch) => {
    // params Already validated
    // Clear the cached response first
    dispatch({type: TRACK_RESPONSE, payload: null})
    const properties = JSON.parse(propertiesJson)
    return dispatch(track({
      userId,
      event,
      properties
    }))
    .then((resJson) => {
      // dispatch another action to get response to display on screen
      dispatch({type: TRACK_RESPONSE, payload: resJson})
    })
  }
}

const mapStateToProps = (state) => ({
  responseJson: state.track
})

export default compose(
  reduxForm(formConfig, mapStateToProps)
)(TrackForm)
