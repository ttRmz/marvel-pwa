import React from 'react'
import { useUserContext } from '../../contexts/user'

export default function Logout() {
  const { logout } = useUserContext()

  React.useEffect(() => {
    logout()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ''
}
