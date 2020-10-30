import PropTypes from 'prop-types'
import React from 'react'
import { Btn } from './Button.styles'

export function Button(props) {
  return <Btn {...props} />
}

Button.propTypes = {
  highlighted: PropTypes.bool,
  light: PropTypes.bool,
}
