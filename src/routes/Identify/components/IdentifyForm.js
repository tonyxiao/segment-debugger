import React from 'react'
import classes from './IdentifyForm.scss'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { createValidator, required } from 'utils/validation'

export const IdentifyForm = ({fields: {userId, traits}, handleSubmit, submitting, resetForm, error}) => (
  <div>
    <h2>Identify</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label>userId</label>
        <input type="text" {...userId} />
      </div>
      <div>
        <label>traits</label>
        <textarea className={classes.content} {...traits} />
      </div>
      <div>
        <p className={classes.error}>{error}</p>
      </div>
      <div>
        <button type="submit" disabled={submitting}>
          {submitting ? <i/> : <i/>} Submit
        </button>
        <button type="button" disabled={submitting} onClick={resetForm}>
          Clear Values
        </button>
      </div>
    </form>
  </div>
)

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
