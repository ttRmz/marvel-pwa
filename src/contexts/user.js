import { navigate } from '@reach/router'
import { useLocalStorage } from '@ttrmz/react-utils'
import React from 'react'
import { useAuth } from '../server/auth/mutations'

const LOCAL_STORAGE_USER_KEY = 'marvel_pwa_user'
const LOCAL_STORAGE_USER_INITIAL_STATE = {}

const UserContext = React.createContext({})

export function useUserContext() {
  return React.useContext(UserContext)
}

export function UserContextProvider({ value, ...rest }) {
  const [user, setUser] = useLocalStorage(
    LOCAL_STORAGE_USER_KEY,
    LOCAL_STORAGE_USER_INITIAL_STATE,
  )
  const [error, setError] = React.useState(null)

  const { auth } = useAuth()

  const login = React.useCallback(
    variables => {
      auth(variables)
        .then(response => {
          const error = response.data?.errors

          if (error) return setError(error)

          setUser({
            username: variables.username,
            token: response.headers['x-access-token'],
          })

          navigate('/home')
        })
        .catch(setError)
    },
    [auth, setUser],
  )

  const logout = React.useCallback(() => {
    setUser(LOCAL_STORAGE_USER_INITIAL_STATE)
    navigate('/login')
  }, [setUser])

  const values = React.useMemo(
    () => ({
      user,
      logout,
      login,
      error,
    }),
    [user, logout, login, error],
  )

  return <UserContext.Provider value={values} {...rest} />
}
