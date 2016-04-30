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
        <button type="submit" disabled={submitting}>
          {submitting ? <i/> : <i/>} Submit
        </button>
        <button type="button" disabled={submitting} onClick={resetForm}>
          Clear Values
        </button>
      </div>
    </form>
    <p>Error iss {userId.error}</p>
  </div>
)

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps)(
  reduxForm({
    form: 'identify',
    fields: ['userId', 'traits'],
    validate: createValidator({
      userId: [required]
    }),
    onSubmit: (values) => {
      console.log(values)
      analytics.track('userId', values)
    }
  })(IdentifyForm)
)


// export default IdentifyForm
