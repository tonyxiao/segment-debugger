import React from 'react'
import CSSModules from 'react-css-modules'
import styles from 'styles/shared.scss'

export const JsonBlock = ({json}) => {
  if (!json) {
    return null
  }
  const prettyJsonString = JSON.stringify(json, null, 4)
  return (
    <pre>Response: {prettyJsonString}</pre>
  )
}