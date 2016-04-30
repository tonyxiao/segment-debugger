import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './GlobalForm.scss'

export const GlobalForm = ({ fields: {writeKey, sdk} }) => (
  <form styleName="form">
    <label htmlFor="">WriteKey</label>
    <input type="text" {...writeKey } />
    <label htmlFor="">SDK</label>
    <input type="text" {...sdk} />
  </form>
)

export default CSSModules(GlobalForm, styles)
