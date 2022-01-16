import React, {useState} from 'react'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import {useNavigate} from 'react-router-dom'


function SignUp() {
  const initialState = {
    login: '',
    email: '',
    password: '',
    password2: '',
  }
  const [state, setState] = useState(initialState)
  const navigate = useNavigate()

  const signupHandler = (event) => {
    console.log('signupHandler')
    console.log(state)
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
