import React, {Component} from 'react'

class SignUp extends Component {
  render(){
    return (
      <div className="content__canvas">
        <form className="form form_auth">
          <input className="form__input input" type="text" name="login" placeholder="Login" />
          <input className="form__input input" type="text" name="email" placeholder="Email" />
          <input className="form__input input" type="password" name="password" placeholder="Password" />
          <input className="form__input input" type="password" name="password2" placeholder="Repeat password" />
          <button className="form__button button" type="submit">Sign Up</button>
        </form>
      </div>
    )
  }
}
export default SignUp
