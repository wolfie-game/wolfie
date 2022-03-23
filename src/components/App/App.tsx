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
import {connect} from 'react-redux'
import {fetchTheme} from '../../utils/redux/reducers/user'
import {postTheme} from '../../utils/redux/reducers/user'
import {ThemeContext} from '../../utils/context/ThemeContext'

const App: FC = (props) => {
  const didMount = useRef(false)
  const [theme, setTheme] = useState('dark')

  const switchTheme = (e) => {
    let switcher = e.target.checked ? 'light' : 'dark'
    let ownerId = props.user?.value?.id
    if(ownerId) {
      props.dispatch(postTheme(switcher, ownerId))
    } else {
      localStorage.setItem('theme', switcher) 
    }
    setTheme(switcher)
  }

  useEffect(() => {
    // console.log('App checkin state', props.user?.value?.id)
    let selectedTheme
    if (!didMount.current) {
      if(props.user?.value?.id) {
        props.dispatch(fetchTheme(props.user?.value?.id))
        selectedTheme = props.theme?.theme
      } else {
        let localStorageTheme = localStorage.getItem('theme')
        selectedTheme = localStorageTheme ? localStorageTheme : 'dark'
      }
      didMount.current = true
      setTheme(selectedTheme)
    }
  })

  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme == 'light' ? 'wrapper wrapper_light' : 'wrapper'}>
        <div className="wrapper__container">
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
      </div>
    </ThemeContext.Provider>
  )
}

const Component = hot(App)

const ConnectedApp = connect((state) => {
  return state
})(Component)

export default ConnectedApp as App
