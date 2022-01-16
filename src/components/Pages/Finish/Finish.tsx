import React, { Component } from 'react'
import LinkItem from '../../LinkItem/LinkItem'
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'

class Finish extends Component {
  render(){
    return (
      <ErrorBoundary>
        <div className="content__canvas">
          <div className="finish">
            <img className="finish__img" src="./img/wolf.png"></img>
            <div className="finish__header">
              <div>Score:</div>
              <div>2300</div>
            </div>
            <nav className="navigationk">
              <ul>
                  <li className="finish__nav">
                    <LinkItem styleName="finish__link navigation__link" goTo="/game">Начать сначала</LinkItem>
                  </li>
              </ul>
            </nav>
          </div>
        </div>
      </ErrorBoundary>
    )
  }
}
export default Finish
