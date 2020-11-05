import { useDebounce } from '@ttrmz/react-utils'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { CharactersList, Input } from '../../components'
import { setPageTitle } from '../../core/setPageTitle'
import { useCharacters } from '../../server/characters/query'
import { SearchWrapper, SearchInput, SearchError } from './Search.styles'

export default function Search() {
  const { t } = useTranslation()
  const [search, setSearch] = React.useState('')

  const nameStartsWith = useDebounce(search, 1000)

  console.log('Search -> search', search)
  const { characters, loading } = useCharacters({
    queryParams: {
      nameStartsWith,
    },
  })
  console.log('Search -> characters', characters)

  React.useEffect(() => {
    setPageTitle(t('search.title'))
  }, [t])

  const handleChangeSearchValue = event => {
    setSearch(event.target.value)
  }

  const hasNoResult = !characters?.length && !loading && nameStartsWith

  return (
    <SearchWrapper>
      <Input
        as={SearchInput}
        value={search}
        onChange={handleChangeSearchValue}
        placeholder={t('search.input')}
      />

      {characters && <CharactersList characters={characters} />}
      {hasNoResult && <SearchError>{t('search.no_result')}</SearchError>}

      {loading && !characters && <h3>{t('characters.loading')}</h3>}
    </SearchWrapper>
  )
}
