import React from 'react'
import CSSModules from 'react-css-modules'
import { Form, FormGroup, FormControl, ControlLabel, Col, HelpBlock, Button } from 'react-bootstrap'
import styles from 'styles/shared.scss'
import {JsonBlock} from 'components/ui'

export const AliasForm = ({fields: {userId, previousId}, handleSubmit, submitting, resetForm, error, responseJson}) => (
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
    <FormGroup controlId="previousId" validationState={previousId.error && 'error'}>
      <Col componentClass={ControlLabel} sm={2}>
        previousId
      </Col>
      <Col sm={10}>
        <FormControl placeholder="Previous Id" {...previousId} />
        <HelpBlock>{previousId.error}</HelpBlock>
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

export default CSSModules(AliasForm, styles)
