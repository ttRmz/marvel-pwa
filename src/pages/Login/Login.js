import React from 'react'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../core/setPageTitle'
import { useTranslation } from 'react-i18next'

export default function Dashboard() {
  const { t } = useTranslation()

  React.useEffect(() => {
    setPageTitle('Login')
  }, [])

  return <PageTitle>{t('login')}</PageTitle>
}
