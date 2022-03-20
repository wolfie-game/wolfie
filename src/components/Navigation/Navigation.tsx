import React, {useContext} from 'react'
import LinkItem from '../LinkItem/LinkItem'
import {DataMap} from './types'
import {ThemeContext} from '../../utils/context/ThemeContext'

const links = [
  {
    id: 1,
    link: '/leaderboard',
    text: 'Leaderboard',
  },
  {
    id: 2,
    link: '/forum',
    text: 'Forum',
  },
  {
    id: 3,
    link: '/profile',
    text: 'Profile',
  },
]

function Navigation() {
  const theme = useContext(ThemeContext)

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {links.map((item: DataMap) => (
          <li key={item.id}>
            <LinkItem styleName={theme == 'light' ? 'navigation__link navigation__link_light' : 'navigation__link'} goTo={item.link}>
              {item.text}
            </LinkItem>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
