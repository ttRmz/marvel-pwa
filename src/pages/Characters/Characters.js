import { Link } from '@reach/router'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, CharactersList } from '../../components'
import { setPageTitle } from '../../core/setPageTitle'
import { useCharacters } from '../../server/characters/query'
import { CharactersFilter, CharactersWrapper } from './Characters.styles'

const FILTERS = [{ key: 'name' }, { key: 'modified' }]

export default function Characters() {
  const [filter, setFilter] = React.useState('name')
  const { t } = useTranslation()

  const { characters, loading } = useCharacters({
    queryParams: {
      orderBy: filter,
    },
  })

  React.useEffect(() => {
    setPageTitle('Characters')
  }, [])

  return (
    <CharactersWrapper>
      <Link to="/search">Search</Link>

      {FILTERS.map(({ key }) => (
        <CharactersFilter
          as={Button}
          key={key}
          onClick={() => setFilter(key)}
          highlighted={filter === key}
          light
        >
          {t(`filters.${key}`)}
        </CharactersFilter>
      ))}

      {loading && <h3>{t('characters.loading')}</h3>}

      {!loading && characters && <CharactersList characters={characters} />}
    </CharactersWrapper>
  )
}
