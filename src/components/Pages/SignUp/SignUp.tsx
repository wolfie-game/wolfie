import React, {useState} from 'react'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import {useNavigate} from 'react-router-dom'
import UserAuthController from '../../../controllers/user-auth'
import validation from '../../../utils/validation'
const signUpInstance = new UserAuthController()

interface IState {
  login: string
  email: string
  password: string
  password2?: string
}

function SignUp() {
  const initialState: IState = {
    login: '',
    email: '',
    password: '',
    password2: '',
  }
  const [state, setState] = useState(initialState)
  const navigate = useNavigate()

  const signupHandler = (event) => {
    if (inputsValid()) {
      const tempState = {...state}
      delete tempState.password2
      signUpInstance
        .signup({
          ...tempState,
        })
        .then((info) => {
          if (info.id) {
            alert('good to go')
            navigate('/game')
          }
        })
        .catch(() => alert('You are not sign in'))
    }
  }

  const inputsValid = () => {
    const notValid = Object.keys(state).filter((item) => {
      return !validation(state[item], item)
    })
    if (notValid.length === 0 && state.password == state.password2) return true
    else return false
  }

  const signinHandler = (event) => {
    event.preventDefault()
    navigate('/')
  }

  const handleChange = (event: any) => {
    setState({...state, [event.target.name]: event.target.value})
  }

  return (
    <div className="content__canvas">
      <form className="form form_auth" onSubmit={signupHandler}>
        <Input
          styleName="form__input input"
          type="text"
          name="login"
          value={state.login}
          placeholder="Login"
          handler={handleChange}
        />
        <Input
          styleName="form__input input"
          type="text"
          name="email"
          value={state.email}
          placeholder="Email"
          handler={handleChange}
        />
        <Input
          styleName="form__input input"
          type="password"
          name="password"
          value={state.password}
          placeholder="Password"
          handler={handleChange}
        />
        <Input
          styleName="form__input input"
          type="password"
          name="password2"
          value={state.password2}
          placeholder="Repeat password"
          handler={handleChange}
        />
        <Button
          styleName="form__button button"
          type="button"
          handler={signupHandler}>
          Sign Up
        </Button>
        <Button
          styleName="form__button button-transparent"
          type="button"
          handler={signinHandler}>
          Sign In
        </Button>
      </form>
    </div>
  )
}
export default SignUp
