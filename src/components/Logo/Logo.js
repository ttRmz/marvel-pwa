import PropTypes from 'prop-types'
import React from 'react'
import logo from '../../assets/marvel-logo.png'
import { Figure, Img } from './Logo.styles'

export function Logo(props) {
  return (
    <Figure {...props}>
      <Img src={logo} alt="marvel-logo" />
    </Figure>
  )
}

Logo.propTypes = {
  extended: PropTypes.bool,
}
