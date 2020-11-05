import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@reach/router'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { BackToCharactersWrapper } from './BackToCharacters.styles'

export function BackToCharacters(props) {
  const { t } = useTranslation()

  return (
    <BackToCharactersWrapper {...props} as={Link} to="/characters">
      <FontAwesomeIcon icon={faChevronLeft} />
      {t('back')}
    </BackToCharactersWrapper>
  )
}
