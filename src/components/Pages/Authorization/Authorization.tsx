import React, { Component } from 'react'
import LinkItem from '../../LinkItem/LinkItem'
import { DataMap } from './types'

const links = [
  {
    link: '/sign-in',
    text: 'Sign In'
  }, {
    link: '/sign-up',
    text: 'Sign Up'
  }
]

class Authorization extends Component {
  render(){
    return (
      <div className="content__canvas">
        <div className="authorization">
          <h1 className="authorization__title">You are not autorized!</h1>
          <nav className="navigationk">
            <ul>
              {links.map((item: DataMap, index: number) => (
                <li key={index} className="authorization__nav">
                  <LinkItem styleName="authorization__link navigation__link" goTo={item.link}>{item.text}</LinkItem>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
export default Authorization
