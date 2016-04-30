import React from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap'
import classes from './IdentifyForm.scss'

export default ({fields: {userId, traits}, handleSubmit, submitting, resetForm, error}) => (
  <div className={classes.container}>
    <h2>Identify</h2>
    <form onSubmit={handleSubmit} className={classes.form}>
      <div>
        <label>userId</label>
        <input type="text" {...userId} />
      </div>
      <div>
        <label>traits</label>
        <textarea className={classes.jsonInput} {...traits} />
      </div>
      <div>
        <pre>
          
        </pre>
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
