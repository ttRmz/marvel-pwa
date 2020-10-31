import React from 'react'
import { useTranslation } from 'react-i18next'
import { CharactersList } from '../../components'
import { setPageTitle } from '../../core/setPageTitle'
import { useCharacters } from '../../server/characters/query'
import { CharactersWrapper } from './Characters.styles'

export default function Characters() {
  const { t } = useTranslation()

  const { characters, loading } = useCharacters()

  React.useEffect(() => {
    setPageTitle('Characters')
  }, [])

  return (
    <CharactersWrapper>
      {loading && t('characters.loading')}

      {!loading && characters && <CharactersList characters={characters} />}
    </CharactersWrapper>
  )
}
