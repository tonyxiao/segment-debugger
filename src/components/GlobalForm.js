import React from 'react'
import CSSModules from 'react-css-modules'
import { Form, FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap'
import styles from './GlobalForm.scss'


export const GlobalForm = ({ fields: {writeKey, sdk} }) => (
  <Form horizontal styleName='form'>
    <FormGroup controlId="writeKey">
      <Col componentClass={ControlLabel} sm={2}>
        Write Key
      </Col>
      <Col sm={10}>
        <FormControl styleName='writeKey' placeholder="Write Key" {...writeKey} />
      </Col>
    </FormGroup>
    <FormGroup controlId="SDK">
      <Col componentClass={ControlLabel} sm={2}>
        SDK
      </Col>
      <Col sm={10}>
        <FormControl componentClass="select" {...sdk}>
          <option value="python">Python</option>
          <option value="node">Node.js</option>
          <option value="ruby">Ruby</option>
        </FormControl>
      </Col>
    </FormGroup>
  </Form>
)

export default CSSModules(GlobalForm, styles)
