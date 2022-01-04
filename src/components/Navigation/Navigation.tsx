import React, { Component } from 'react'
import LinkItem from '../LinkItem/LinkItem'
import { DataMap } from './types'

const links = [
  {
    link: '/leaderboard',
    text: 'Leaderboard'
  }, {
    link: '/forum',
    text: 'Forum'
  }, {
    link: '/profile',
    text: 'Profile'
  }
]

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <ul>
          {links.map((item: DataMap, index: number) => (
            <li key={index}>
              <LinkItem styleName="navigation__link" goTo={item.link}>{item.text}</LinkItem>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}
export default Navigation