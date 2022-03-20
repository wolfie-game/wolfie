import React, {FC, useState, useEffect, useRef} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../Pages/Main'
import Forum from '../Pages/Forum'
import LeaderBoard from '../Pages/LeaderBoard'
import Profile from '../Pages/Profile'
import Authorization from '../Pages/Authorization'
import SignIn from '../Pages/SignIn/SignIn'
import SignUp from '../Pages/SignUp'
import Finish from '../Pages/Finish'
import Navigation from '../Navigation'
import Switcher from '../Switcher/Switcher'
import './App.scss'
import '../../utils/service-worker/registerServiceWorker'
import PrivateRoute from '../../HOC/authentification'
import {hot} from 'react-hot-loader/root'

import {ThemeContext} from '../../utils/context/ThemeContext'

const App: FC = () => {
  const didMount = useRef(false)
  const [theme, setTheme] = useState('dark')

  const switchTheme = (e) => {
    let switcher = e.target.checked ? 'light' : 'dark'
    setTheme(switcher)
    localStorage.setItem('theme', switcher)
  }

  useEffect(() => {
    if (!didMount.current) {
      let selectedTheme = localStorage.getItem('theme')
      didMount.current = true
      setTheme(selectedTheme ? selectedTheme : 'dark')
    }
  })

  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme == 'light' ? 'wrapper wrapper_light' : 'wrapper'}>
        <div className="col-content">
          <div className="logo">
            <img src={theme == 'light' ? './img/wolfie-logo-light.png' : './img/wolfie-logo.png'}></img>
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
          <Switcher 
            styleName="switcher switcher_theme" 
            id="theme" 
            handler={switchTheme} 
          />
          <Navigation />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

const Component = hot(App)

export default Component as App
