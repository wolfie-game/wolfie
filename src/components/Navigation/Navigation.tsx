import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <ul>
          <li>
            <Link className="navigation__link" to="/leaderboard">Leaderboard</Link>
          </li>
          <li>
            <Link className="navigation__link" to="/forum">Forum</Link>
          </li>
          <li>
            <Link className="navigation__link" to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    )
  }
}
export default Navigation