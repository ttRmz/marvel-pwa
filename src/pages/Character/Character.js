import { Redirect } from '@reach/router'
import React from 'react'
import { setPageTitle } from '../../core/setPageTitle'
import { useCharacter } from '../../server/characters/query'
import {
  CharacterTitle,
  CharacterWrapper,
  CharacterCover,
  CharacterDescription,
} from './Character.styles'

export default function Character({ characterId }) {
  const { character, loading, error } = useCharacter(characterId)

  React.useEffect(() => {
    setPageTitle('Character')
  }, [])

  return error ? (
    <Redirect noThrow to="/characters" />
  ) : (
    <CharacterWrapper>
      {!loading && character && (
        <>
          <CharacterCover
            thumbnail={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
          <CharacterTitle>{character?.name}</CharacterTitle>
          <CharacterDescription>{character?.description}</CharacterDescription>
        </>
      )}
    </CharacterWrapper>
  )
}
