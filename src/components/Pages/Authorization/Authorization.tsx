import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Authorization extends Component {
  render(){
    return (
      <div className="content__canvas">
        <div className="authorization">
          <h1 className="authorization__title">You are not autorized!</h1>
          <nav className="navigationk">
            <ul>
              <li className="authorization__nav">
                <Link className="authorization__link navigation__link" to="/sign-in">Sign In</Link>
              </li>
              <li className="authorization__nav">
                <Link className="authorization__link navigation__link" to="/sign-up">Sign Up</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
export default Authorization
