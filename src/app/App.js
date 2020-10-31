import { Redirect, Router } from '@reach/router'
import md5 from 'md5'
import React from 'react'
import { RestfulProvider } from 'restful-react'
import { useUserContext } from '../contexts/user'
import { AppWrapper } from './App.styles'

const ts = new Date().getTime()
const publicKey = process.env.REACT_APP_API_PUBLIC_KEY
const privateKey = process.env.REACT_APP_API_PRIVATE_KEY

const hash = md5(`${ts}${privateKey}${publicKey}`)
const apiUrl = `https://gateway.marvel.com:443/v1/public`

const Characters = React.lazy(() => import('../pages/Characters/Characters'))
const Login = React.lazy(() => import('../pages/Login/Login'))

export function App() {
  const { user } = useUserContext()

  const isAuth = user.token

  return (
    <RestfulProvider
      queryParams={{ ts, apikey: publicKey, hash }}
      base={apiUrl}
    >
      <AppWrapper>
        <React.Suspense fallback="Loading">
          <Router>
            {isAuth && <Characters path="/characters" />}

            <Login path="/login" />

            <Redirect noThrow from="*" to={isAuth ? 'characters' : 'login'} />
          </Router>
        </React.Suspense>
      </AppWrapper>
    </RestfulProvider>
  )
}
