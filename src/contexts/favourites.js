import { useLocalStorage } from '@ttrmz/react-utils'
import React from 'react'
import { useUserContext } from './user'

const LOCAL_STORAGE_FAVS_KEY = 'marvel_pwa_favourites'

const FavouritesContext = React.createContext({})

export function useFavouritesContext() {
  return React.useContext(FavouritesContext)
}

export function FavouritesContextProvider({ value, ...rest }) {
  const { user } = useUserContext()

  const formattedUsername = React.useMemo(
    () => user?.username?.replace(' ', '_'),
    [user],
  )

  const [favourites, setFavourites] = useLocalStorage(
    LOCAL_STORAGE_FAVS_KEY,
    {},
  )

  const toggleFavourite = React.useCallback(
    characterId => {
      setFavourites(prev => ({
        ...prev,
        [formattedUsername]: (prev[formattedUsername] || []).includes(
          characterId,
        )
          ? prev[formattedUsername].filter(id => id !== characterId)
          : [...(prev[formattedUsername] || []), characterId],
      }))
    },
    [formattedUsername, setFavourites],
  )

  const values = React.useMemo(
    () => ({
      favourites: favourites[formattedUsername] || [],
      toggleFavourite,
    }),
    [favourites, toggleFavourite, formattedUsername],
  )

  return <FavouritesContext.Provider value={values} {...rest} />
}
