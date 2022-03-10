import React, {FC} from 'react'
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
import './App.scss'
import '../../utils/service-worker/registerServiceWorker'
import PrivateRoute from '../../HOC/authentification'
import {hot} from 'react-hot-loader/root'

const App: FC = () => {
  return (
        <div className="wrapper">
          <div className="col-content">
            <div className="logo">
              <img src="./img/wolfie-logo.png"></img>
            </div>
            <div className="content">
              <div className="content__inner">
                <Routes>
                  <Route path="/" element={<SignIn />} />
                  <Route path="/authorization" element={<Authorization />} />
                  <Route path="/sign-up" element={<SignUp />} />
                  <Route
                    path="/game"
                    element={<Main />}
                  />
                  <Route
                    path="/leaderboard"
                    element={
                      <PrivateRoute>
                        <LeaderBoard />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/forum"
                    element={
                      <PrivateRoute>
                        <Forum />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/profile"
                    element={
                      <PrivateRoute>
                        <Profile />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/finish"
                    element={
                      <PrivateRoute>
                        <Finish />
                      </PrivateRoute>
                    }
                  />
                </Routes>
              </div>
            </div>
          </div>
          <div className="col-navigation">
            <Navigation />
          </div>
        </div>

  )
}

const Component = hot(App)

export default Component as App
