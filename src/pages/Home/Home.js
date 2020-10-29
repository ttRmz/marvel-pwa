import React from 'react'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../core/setPageTitle'
import { useTranslation } from 'react-i18next'
import { useCharacters } from '../../server/characters/query'

export default function Home() {
  const { t } = useTranslation()

  const { characters } = useCharacters()

  console.log('Home -> characters', characters)

  React.useEffect(() => {
    setPageTitle('Home')
  }, [])

  return <PageTitle>{t('home')}</PageTitle>
}
