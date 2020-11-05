import { faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@reach/router'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, CharactersList, Logo } from '../../components'
import { setPageTitle } from '../../core/setPageTitle'
import { useCharacters } from '../../server/characters/query'
import {
  CharactersFilter,
  CharactersHeader,
  CharactersWrapper,
} from './Characters.styles'

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
    setPageTitle(t('characters.title'))
  }, [t])

  return (
    <CharactersWrapper>
      <CharactersHeader>
        <Logo />

        <Link to="/search">
          <FontAwesomeIcon icon={faSearch} />
        </Link>

        <Link to="/logout">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </Link>
      </CharactersHeader>

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
