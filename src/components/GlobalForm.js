import React from 'react'
import CSSModules from 'react-css-modules'
import { Form, FormGroup, FormControl, ControlLabel, Col, HelpBlock } from 'react-bootstrap'
import styles from './GlobalForm.scss'

export const GlobalForm = ({ fields: {writeKey, sdk} }) => (
  <Form horizontal>
    <FormGroup controlId="writeKey" validationState={writeKey.error && 'error'}>
      <Col componentClass={ControlLabel} sm={2}>
        Write Key
      </Col>
      <Col sm={10}>
        <FormControl styleName='writeKey' placeholder="Write Key" {...writeKey} />
        <HelpBlock>{writeKey.error}</HelpBlock>
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
        </FormControl>
      </Col>
    </FormGroup>
  </Form>
)

export default CSSModules(GlobalForm, styles)
