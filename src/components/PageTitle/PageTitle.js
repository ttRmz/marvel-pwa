import React from 'react'
import { Title } from './PageTitle.styles'

export function PageTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>
}
