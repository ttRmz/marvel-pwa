import { useDebounce } from '@ttrmz/react-utils'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { BackToCharacters, CharactersList, Input } from '../../components'
import { setPageTitle } from '../../core/setPageTitle'
import { useCharacters } from '../../server/characters/query'
import {
  SearchError,
  SearchInput,
  SearchInputWrapper,
  SearchWrapper,
} from './Search.styles'

export default function Search() {
  const { t } = useTranslation()
  const [search, setSearch] = React.useState('')

  const nameStartsWith = useDebounce(search, 1000)

  const { characters, loading } = useCharacters({
    queryParams: {
      nameStartsWith,
    },
  })

  React.useEffect(() => {
    setPageTitle(t('search.title'))
  }, [t])

  const handleChangeSearchValue = event => {
    setSearch(event.target.value)
  }

  const hasNoResult = !characters?.length && !loading && nameStartsWith

  return (
    <SearchWrapper>
      <BackToCharacters />

      <SearchInputWrapper>
        <Input
          as={SearchInput}
          value={search}
          onChange={handleChangeSearchValue}
          placeholder={t('search.input')}
        />
      </SearchInputWrapper>

      {characters && <CharactersList characters={characters} />}
      {hasNoResult && <SearchError>{t('search.no_result')}</SearchError>}

      {loading && !characters && <h3>{t('characters.loading')}</h3>}
    </SearchWrapper>
  )
}
