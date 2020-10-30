import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../components'
import { useUserContext } from '../../contexts/user'
import { setPageTitle } from '../../core/setPageTitle'
import { useCharacters } from '../../server/characters/query'

export default function Characters() {
  const { t } = useTranslation()
  const { user } = useUserContext()

  const { characters } = useCharacters()

  console.log('Characters -> characters', characters)

  React.useEffect(() => {
    setPageTitle('Characters')
  }, [])

  return (
    <PageTitle>
      {t('characters')} {user.username}
    </PageTitle>
  )
}
