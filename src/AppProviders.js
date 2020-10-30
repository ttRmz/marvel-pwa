import React from 'react'
import { UserContextProvider } from './contexts/user'

export function AppProviders({ children }) {
  return (
    <UserContextProvider>
      <div>{children}</div>
    </UserContextProvider>
  )
}
