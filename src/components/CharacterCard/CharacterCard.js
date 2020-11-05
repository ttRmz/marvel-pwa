import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'
import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  CharacterCardDescription,
  CharacterCardDetails,
  CharacterCardMore,
  CharacterCardName,
  CharacterCardThumbnail,
  CharacterCardWrapper,
} from './CharacterCard.styles'

export function CharacterCard({ character }) {
  const { t } = useTranslation()

  return (
    <CharacterCardWrapper>
      <Link to={`/characters/${character.id}`}>
        <CharacterCardThumbnail
          as="img"
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />

        <CharacterCardDetails>
          <CharacterCardName>{character.name}</CharacterCardName>

          <CharacterCardDescription>
            {character.description}
          </CharacterCardDescription>

          <CharacterCardMore>
            {t('characters.more')}
            <FontAwesomeIcon icon={faChevronRight} />
          </CharacterCardMore>
        </CharacterCardDetails>
      </Link>
    </CharacterCardWrapper>
  )
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
}
