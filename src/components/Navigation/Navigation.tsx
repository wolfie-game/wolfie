import React, {Component} from 'react'
import LinkItem from '../LinkItem/LinkItem'
import {DataMap} from './types'

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

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <ul>
          {links.map((item: DataMap) => (
            <li key={item.id}>
              <LinkItem styleName="navigation__link" goTo={item.link}>
                {item.text}
              </LinkItem>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}
export default Navigation
