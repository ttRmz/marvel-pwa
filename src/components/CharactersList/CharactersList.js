import PropTypes from 'prop-types'
import React from 'react'
import { CharacterCard } from '../CharacterCard'
import { CharactersListWrapper } from './CharactersList.styles'

export function CharactersList({ characters }) {
  return (
    <CharactersListWrapper>
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </CharactersListWrapper>
  )
}

CharactersList.propTypes = {
  characters: PropTypes.array.isRequired,
}
