import React from 'react'
import CSSModules from 'react-css-modules'
import Header from '../../components/Header'
import GlobalForm from '../../containers/GlobalForm'
import styles from './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='container text-center' styleName='page-wrapper'>
    <h1>Segment Debugger Tool</h1>
    <GlobalForm />
    <Header />
    <div styleName="main-container">
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CSSModules(CoreLayout, styles)
