import { faStar as fasStarRegular } from '@fortawesome/free-regular-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { stopEvent } from '@ttrmz/react-utils'
import PropTypes from 'prop-types'
import React from 'react'
import { useFavouritesContext } from '../../contexts/favourites'
import {
  CharacterNameToggle,
  CharacterNameWrapper,
} from './CharacterName.styles'

export function CharacterName({ character, ...props }) {
  const { favourites, toggleFavourite } = useFavouritesContext()

  const isFav = favourites.includes(character.id)

  const handleToggleCharacter = event => {
    stopEvent(event)
    toggleFavourite(character.id)
  }

  return (
    <CharacterNameWrapper {...props}>
      {character.name}

      <CharacterNameToggle onClick={handleToggleCharacter}>
        <FontAwesomeIcon icon={isFav ? faStar : fasStarRegular} />
      </CharacterNameToggle>
    </CharacterNameWrapper>
  )
}

CharacterName.propTypes = {
  character: PropTypes.object.isRequired,
}
