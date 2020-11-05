import { faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@reach/router'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, CharactersList, Logo } from '../../components'
import { useFavouritesContext } from '../../contexts/favourites'
import { setPageTitle } from '../../core/setPageTitle'
import { useCharacters } from '../../server/characters/query'
import {
  CharactersFilter,
  CharactersHeader,
  CharactersWrapper,
} from './Characters.styles'

const FILTERS = [
  { key: 'name', i18n_key: 'name' },
  { key: 'modified', i18n_key: 'modified' },
  { key: 'name', i18n_key: 'favourites' },
]

export default function Characters() {
  const [filter, setFilter] = React.useState(FILTERS[0])
  const { favourites } = useFavouritesContext()
  const { t } = useTranslation()

  const { characters, loading } = useCharacters({
    queryParams: {
      orderBy: filter.key,
    },
  })

  React.useEffect(() => {
    setPageTitle(t('characters.title'))
  }, [t])

  const filteredCharacters =
    filter.i18n_key === 'favourites'
      ? characters?.filter(({ id }) => favourites.includes(id))
      : characters

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

      {FILTERS.map(({ key, i18n_key }) => (
        <CharactersFilter
          as={Button}
          key={i18n_key}
          onClick={() => setFilter({ key, i18n_key })}
          highlighted={filter.i18n_key === i18n_key}
          light
        >
          {t(`filters.${i18n_key}`)}
        </CharactersFilter>
      ))}

      {loading && <h3>{t('characters.loading')}</h3>}

      {!loading && characters && (
        <CharactersList characters={filteredCharacters} />
      )}
    </CharactersWrapper>
  )
}
