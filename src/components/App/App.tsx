import React, {Component} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from '../Pages/Main'
import Forum from '../Pages/Forum'
import LeaderBoard from '../Pages/LeaderBoard'
import Profile from '../Pages/Profile'
import Authorization from '../Pages/Authorization'
import SignIn from '../Pages/SignIn/SignIn'
import SignUp from '../Pages/SignUp'
import Finish from '../Pages/Finish'
import Navigation from '../Navigation'
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import './App.scss'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <div className="col-content">
            <div className="logo">
              <img src="./img/wolfie-logo.png"></img>
            </div>
            <div className="content">
              <div className="content__inner">
                <Routes>
                  <Route path="/" element={<SignIn />} />
                  <Route path="/leaderboard" element={<LeaderBoard />} />
                  <Route path="/forum" element={<Forum />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/authorization" element={<Authorization />} />
                  <Route path="/game" element={<Main />} />
                  <Route path="/sign-up" element={<SignUp />} />
                  <Route path="/finish" element={<Finish />} />
                </Routes>
              </div>
            </div>
          </div>
          <div className="col-navigation">
            <Navigation />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
export default App
