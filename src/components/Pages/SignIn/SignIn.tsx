import React, {useEffect, useState} from 'react'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'
import {useNavigate} from 'react-router-dom'
import UserAuthController from '../../../controllers/user-auth'
import {useDispatch, useSelector, RootStateOrAny, connect} from 'react-redux'
import {checkAuth} from '../../../utils/redux/reducers/user'

const signInInstance = new UserAuthController()
const signinUrl = 'https://ya-praktikum.tech/signin'

function SignIn() {
  const initialState = {
    login: '',
    password: '',
  }
  const [state, setState] = useState(initialState)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userData = useSelector((state: RootStateOrAny) => state.auth)

  useEffect(() => {
    signInInstance
      .getUserInfo()
      .then((info) => {
        // console.log(info)
        if (info.id) {
          dispatch(checkAuth(info))
          navigate('/game')
        }
      })
      .catch(() => alert('You are not signed in'))
  }, [])

  const signinHandler = async () => {
    await signInInstance.signin(state).then((response) => {
      if (response.id) {
        dispatch(checkAuth(response))
        navigate('/game')
      } else {
        alert('Wrong login or password')
      }
    })

    const response = await fetch(signinUrl, {
      method: 'POST',
      body: JSON.stringify({data: state}),
    })
    let result = await response.json()
  }

  const signupHandler = (event) => {
    event.preventDefault()
    navigate('sign-up')
  }

  const handleChange = (event: any) => {
    setState({...state, [event.target.name]: event.target.value})
  }
  return (
    <ErrorBoundary>
      <div className="content__canvas">
        <form className="form form_auth" onSubmit={signinHandler}>
          <Input
            styleName="form__input input"
            type="text"
            name="login"
            value={state.login}
            handler={handleChange}
            placeholder="Login"
          />
          <Input
            styleName="form__input input"
            type="password"
            name="password"
            value={state.password}
            handler={handleChange}
            placeholder="Password"
          />
          <Button
            styleName="form__button button"
            type="button"
            handler={signinHandler}>
            Sign In
          </Button>
          <Button
            styleName="form__button button-transparent"
            type="button"
            handler={signupHandler}>
            Sign Up
          </Button>
        </form>
      </div>
    </ErrorBoundary>
  )
}

const ConnectedApp = connect((state) => {
  return state
})(SignIn)

export default ConnectedApp
