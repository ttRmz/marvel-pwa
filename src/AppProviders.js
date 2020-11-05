import React from 'react'
import { FavouritesContextProvider } from './contexts/favourites'
import { UserContextProvider } from './contexts/user'

export function AppProviders({ children }) {
  return (
    <UserContextProvider>
      <FavouritesContextProvider>
        <div>{children}</div>
      </FavouritesContextProvider>
    </UserContextProvider>
  )
}
