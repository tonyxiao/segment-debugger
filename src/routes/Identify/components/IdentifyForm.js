import React from 'react'
import CSSModules from 'react-css-modules'
import { Form, FormGroup, FormControl, ControlLabel, Col, HelpBlock, Button } from 'react-bootstrap'
import styles from 'styles/shared.scss'

export const IdentifyForm = ({fields: {userId, traitsJson}, handleSubmit, submitting, resetForm, error}) => (
  <Form horizontal onSubmit={handleSubmit}>
    <FormGroup controlId="userId" validationState={userId.error && 'error'}>
      <Col componentClass={ControlLabel} sm={2}>
        userId
      </Col>
      <Col sm={10}>
        <FormControl placeholder="Write Key" {...userId} />
        <HelpBlock>{userId.error}</HelpBlock>
      </Col>
    </FormGroup>
    <FormGroup controlId="traitsJson" validationState={traitsJson.error && 'error'}>
      <Col componentClass={ControlLabel} sm={2}>
        Trains (Json)
      </Col>
      <Col sm={10}>
        <FormControl componentClass="textarea" {...traitsJson} styleName='jsonInput' />
        <HelpBlock>{traitsJson.error}</HelpBlock>
      </Col>
    </FormGroup>
    <Button type="submit" disabled={submitting}>
      Submit
    </Button>
    <p>{submitting && 'Submitting...'}</p>
  </Form>
)

export default CSSModules(IdentifyForm, styles)
