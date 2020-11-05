import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { CharacterName } from '../CharacterName'
import {
  CharacterCardDescription,
  CharacterCardDetails,
  CharacterCardMore,
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
          <CharacterName character={character} />

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
