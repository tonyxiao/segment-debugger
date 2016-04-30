import { compose } from 'recompose'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createValidator, required, validJson } from 'utils/validation'
import { alias } from 'actions'
import AliasForm from '../components/AliasForm'
import { ALIAS_RESPONSE } from '../actionTypes'

const formConfig = {
  form: 'alias',
  fields: ['userId', 'previousId'],
  initialValues: {
    userId: 'tonyx',
    previousId: 'anony-dd23u2j2j2'
  },
  validate: createValidator({
    userId: [required],
    previousId: [required]
  }),
  onSubmit: ({userId, previousId}, dispatch) => {
    // params Already validated
    // Clear the cached response first
    dispatch({type: ALIAS_RESPONSE, payload: null})
    return dispatch(alias({userId, previousId})).then((resJson) => {
      // dispatch another action to get response to display on screen
      dispatch({type: ALIAS_RESPONSE, payload: resJson})
    })
  }
}

const mapStateToProps = (state) => ({
  responseJson: state.alias
})

export default compose(
  reduxForm(formConfig, mapStateToProps)
)(AliasForm)
