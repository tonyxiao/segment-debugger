import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import classes from './HomeView.scss'
import { reduxForm } from 'redux-form'

export const HomeView = ({fields: {sdk, type, content}, handleSubmit, submitting, resetForm}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>SDK</label>
        <div>
          <select {...sdk} value={sdk.value || ''}>
            <option value='browser'>Browser JS</option>
            <option value='node'>Node</option>
            <option value='python'>Python</option>
            <option value='ruby'>Ruby</option>
          </select>
        </div>
      </div>
      <div>
        <label>Call Type</label>
        <div>
          <select {...type} value={type.value || ''}>
            <option value='raw'>Raw</option>
            <option value='track'>Track</option>
            <option value='identify'>Identify</option>
          </select>
        </div>
      </div>
      <div>
        <label>Content</label>
        <div>
          <textarea className={classes.content} {...content} />
        </div>
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

export default reduxForm({
  form: 'home',
  fields: ['sdk', 'type', 'content'],
  initialValues: {
    sdk: 'node',
    type: 'track',
    content: 'Hello World'
  },
  onSubmit: (values) => {
    console.log(values)
  }
})(HomeView)
// export default HomeView
