import React from 'react'
import CSSModules from 'react-css-modules'
import { Form, FormGroup, FormControl, ControlLabel, Col, HelpBlock, Button } from 'react-bootstrap'
import styles from 'styles/shared.scss'
import {JsonBlock} from 'components/ui'

export const TrackForm = ({fields: {userId, event, propertiesJson}, handleSubmit, submitting, resetForm, error, responseJson}) => (
  <Form horizontal onSubmit={handleSubmit}>
    <FormGroup controlId="userId" validationState={userId.error && 'error'}>
      <Col componentClass={ControlLabel} sm={2}>
        userId
      </Col>
      <Col sm={10}>
        <FormControl placeholder="User Id" {...userId} />
        <HelpBlock>{userId.error}</HelpBlock>
      </Col>
    </FormGroup>
    <FormGroup controlId="event" validationState={event.error && 'error'}>
      <Col componentClass={ControlLabel} sm={2}>
        event
      </Col>
      <Col sm={10}>
        <FormControl placeholder="Event" {...event} />
        <HelpBlock>{event.error}</HelpBlock>
      </Col>
    </FormGroup>
    <FormGroup controlId="propertiesJson" validationState={propertiesJson.error && 'error'}>
      <Col componentClass={ControlLabel} sm={2}>
        Properties (Json)
      </Col>
      <Col sm={10}>
        <FormControl componentClass="textarea" {...propertiesJson} styleName='jsonInput' />
        <HelpBlock>{propertiesJson.error}</HelpBlock>
      </Col>
    </FormGroup>
    <JsonBlock json={responseJson} />
    <p styleName='error'>{error}</p>
    <Button type="submit" disabled={submitting}>
      Submit
    </Button>
    <p>{submitting && 'Submitting...'}</p>
  </Form>
)

export default CSSModules(TrackForm, styles)
