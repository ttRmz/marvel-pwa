import { Router } from '@reach/router'
import md5 from 'md5'
import React from 'react'
import { RestfulProvider } from 'restful-react'

const ts = new Date().getTime()
const publicKey = process.env.REACT_APP_API_PUBLIC_KEY
const privateKey = process.env.REACT_APP_API_PRIVATE_KEY

const hash = md5(`${ts}${privateKey}${publicKey}`)
const apiUrl = `https://gateway.marvel.com:443/v1/public`

const Home = React.lazy(() => import('../pages/Home/Home'))
const Dashboard = React.lazy(() => import('../pages/Login/Login'))

export function App() {
  return (
    <RestfulProvider
      queryParams={{ ts, apikey: publicKey, hash }}
      // requestOptions={
      // token && { headers: { Authorization: `Bearer ${token}` } }
      // }
      base={apiUrl}
    >
      <main className="App">
        <React.Suspense fallback="Loading">
          <Router>
            <Home path="/" />
            <Dashboard path="/dashboard" />
          </Router>
        </React.Suspense>
      </main>
    </RestfulProvider>
  )
}
