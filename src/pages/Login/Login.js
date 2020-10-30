import { stopEvent } from '@ttrmz/react-utils'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Input, Logo } from '../../components'
import { useUserContext } from '../../contexts/user'
import { setPageTitle } from '../../core/setPageTitle'
import { LoginTitle, LoginWrapper } from './Login.styles'

const FORM_INITIAL_STATE = { username: '', password: '' }

const FORM_CONFIG = [
  { key: 'username', type: 'text' },
  { key: 'password', type: 'password' },
]

export default function Login() {
  const { t } = useTranslation()
  const { login, error } = useUserContext()
  const [form, setForm] = React.useState(FORM_INITIAL_STATE)

  React.useEffect(() => {
    setPageTitle('Login')
  }, [])

  const handleLogin = () => {
    login(form)
  }

  const handleChangeForm = (key, value) => {
    setForm(previous => ({ ...previous, [key]: value }))
  }

  return (
    <LoginWrapper>
      <Logo extended />

      <LoginTitle>{t('login.header')}</LoginTitle>

      <form onSubmit={stopEvent}>
        {FORM_CONFIG.map(({ type, key }) => (
          <Input
            key={key}
            type={type}
            placeholder={t(`login.${key}`)}
            value={form[key]}
            onChange={event => handleChangeForm(key, event.target.value)}
          />
        ))}

        <Button type="submit" onClick={handleLogin}>
          {t('login.button')}
        </Button>
      </form>

      {error && <p>{t('login.error')}</p>}
    </LoginWrapper>
  )
}
