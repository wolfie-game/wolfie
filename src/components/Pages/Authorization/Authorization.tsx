import React, {useEffect, useContext} from 'react'
import LinkItem from '../../LinkItem/LinkItem'
import {DataMap} from './types'
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'
import {useNavigate} from 'react-router-dom'
import UserAuthController from '../../../controllers/user-auth'
import {useDispatch} from 'react-redux'
import {checkAuth} from '../../../utils/redux/reducers/user'
import {PageMeta} from '../../PageMeta/PageMeta'
import {ThemeContext} from '../../../utils/context/ThemeContext'

const signInInstance = new UserAuthController()

const links = [
  {
    link: '/',
    text: 'Sign In',
  },
  {
    link: '/sign-up',
    text: 'Sign Up',
  },
]

function Authorization() {
  const theme = useContext(ThemeContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    signInInstance
      .getUserInfo()
      .then((info) => {
        if (info.id) {
          dispatch(checkAuth(info))
          navigate('/game')
        }
      })
      .catch(() => console.log('You are not signed in'))
  }, [])

  return (
    <ErrorBoundary>
      <PageMeta title="Авторизация" description="Wolfie авторизация"/>
      <div className="content__canvas">
        <div className="authorization">
          <h1 className="authorization__title">You are not autorized!</h1>
          <nav className="navigationk">
            <ul>
              {links.map((item: DataMap, index: number) => (
                <li key={index} className="authorization__nav">
                  <LinkItem
                    styleName={theme == 'light' ? 'authorization__link navigation__link navigation__link_light' : 'authorization__link navigation__link'}
                    goTo={item.link}>
                    {item.text}
                  </LinkItem>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </ErrorBoundary>
  )
}
export default Authorization
