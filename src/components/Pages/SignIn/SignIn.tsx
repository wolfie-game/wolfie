import React, {useState} from 'react'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import {useNavigate} from 'react-router-dom'

function SignIn() {
  const initialState = {
    login: '',
    password: '',
  }
  const [state, setState] = useState(initialState)
  const navigate = useNavigate()

  const signinHandler = async () => {
    const response = await fetch(`https://ya-praktikum.tech/signin`, {
      method: 'POST',
      body: JSON.stringify({data: state}),
    })
    let result = await response.json()
    alert('Wrong login or password!')
  }

  const signupHandler = (event) => {
    event.preventDefault()
    navigate('sign-up')
  }

  const handleChange = (event: any) => {
    setState({...state, [event.target.name]: event.target.value})
  }
  return (
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
          type="text"
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
  )
}

export default SignIn
