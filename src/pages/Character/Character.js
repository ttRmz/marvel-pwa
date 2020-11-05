import { Redirect } from '@reach/router'
import React from 'react'
import { BackToCharacters, CharacterName } from '../../components'
import { setPageTitle } from '../../core/setPageTitle'
import { useCharacter } from '../../server/characters/query'
import {
  CharacterCover,
  CharacterDescription,
  CharacterWrapper,
} from './Character.styles'

export default function Character({ characterId }) {
  const { character, loading, error } = useCharacter(characterId)

  React.useEffect(() => {
    setPageTitle(character?.name)
  }, [character])

  return error ? (
    <Redirect noThrow to="/characters" />
  ) : (
    <CharacterWrapper>
      <BackToCharacters />

      {!loading && character && (
        <>
          <CharacterCover
            thumbnail={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
          <CharacterName character={character} large />
          <CharacterDescription>{character.description}</CharacterDescription>
        </>
      )}
    </CharacterWrapper>
  )
}
