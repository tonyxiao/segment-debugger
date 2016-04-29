import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import classes from './HomeView.scss'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

export const HomeView = ({counter, validJson, fields: {sdk, type, content}, handleSubmit, submitting, resetForm}) => (
  <div>
    <h1>{counter}</h1>
    <pre style={{textAlign: 'left'}}>{validJson}</pre>
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

const mapStateToProps = (state) => ({
  counter: state.counter,
  validJson: state.counter,
})

export default connect(mapStateToProps)(
  reduxForm({
    form: 'home',
    fields: ['sdk', 'type', 'content'],
    initialValues: {
      sdk: 'node',
      type: 'track',
      content: JSON.stringify({
        type: 'identify',
        userId: 'user1',
        traits: {
          firstName: 'Tony'
        }
      }, null, 4)
    },
    onSubmit: (values) => {
      console.log(values)
      analytics.track('userId', values)
    }
  })(HomeView)
)


// export default HomeView
