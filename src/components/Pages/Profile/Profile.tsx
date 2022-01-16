import React, {useState} from 'react'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'
import UserAuthController from '../../../controllers/user-auth'
import {useNavigate} from 'react-router-dom'

const profileDataRequester = new UserAuthController()

function Profile() {
  const initialState = {
    login: 'admin',
    email: 'admin@wolfie.com',
    maxScore: '100000',
    isLoggedIn: false,
  }
  const [state, setState] = useState(initialState)
  const navigate = useNavigate()

  const changePassHandler = () => {
    console.log('changePassHandler')
  }
  const logOutHandler = () => {
    profileDataRequester.logout()
    navigate('/')
  }
  if (!state.isLoggedIn) {
    //return <Redirect to='/profile' />
    console.log(state.isLoggedIn)
  }

  return (
    <ErrorBoundary>
      <div className="content__canvas">
        <div className="profile">
          <div className="profile__wrap">
            <div className="profile__header">
              <div>Max Score:</div>
              <div>{state.maxScore}</div>
            </div>
            <form className="profile__form form" onSubmit={changePassHandler}>
              <Input
                styleName="form__input input"
                type="text"
                name="login"
                value={state.login}
                readOnly={true}
              />
              <Input
                styleName="form__input input"
                type="text"
                name="email"
                value={state.email}
                readOnly={true}
              />
              <Button
                styleName="form__button button"
                type="button"
                handler={changePassHandler}>
                Change Password
              </Button>
            </form>
            <Button
              styleName="form__button button-transparent"
              type="button"
              handler={logOutHandler}>
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default Profile
