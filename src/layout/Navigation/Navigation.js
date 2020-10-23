import { Link } from '@reach/router'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from '../../components'
import { ROUTES } from '../../routes'

export function Navigation() {
  const { t } = useTranslation()

  return (
    <nav className="Navigation">
      <h1 className="Navigation__title">Marvel PWA</h1>

      <ul className="Navigation__list">
        {ROUTES.map(route => {
          const isPartiallyActive = ({
            isPartiallyCurrent,
            isCurrent,
            href,
          }) => {
            return (isPartiallyCurrent && href !== '/') || isCurrent
              ? { className: 'Navigation__link Navigation__link--active' }
              : { className: 'Navigation__link' }
          }

          return (
            <li key={route.path}>
              <Icon name={route.icon} />

              <Link getProps={isPartiallyActive} to={route.path}>
                {t(`routes.${route.label_key}`)}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
