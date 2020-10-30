import { stopEvent } from '@ttrmz/react-utils'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../components'
import { useUserContext } from '../../contexts/user'
import { setPageTitle } from '../../core/setPageTitle'

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
    <main>
      <PageTitle>{t('login.header')}</PageTitle>

      <form onSubmit={stopEvent}>
        {FORM_CONFIG.map(({ type, key }) => (
          <input
            key={key}
            type={type}
            placeholder={t(`login.${key}`)}
            value={form[key]}
            onChange={event => handleChangeForm(key, event.target.value)}
          />
        ))}

        <button type="submit" onClick={handleLogin}>
          {t('login.button')}
        </button>
      </form>

      {error && <p>{t('login.error')}</p>}
    </main>
  )
}
