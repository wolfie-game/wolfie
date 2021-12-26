import React, {Component} from 'react'

class SignIn extends Component {
  render(){
    return (
      <div className="content__canvas">
        <form className="form form_auth">
          <input className="form__input input" type="text" name="login" placeholder="Login" />
          <input className="form__input input" type="text" name="email" placeholder="Email" />
          <button className="form__button button" type="submit">Sign In</button>
        </form>
      </div>
    )
  }
}
export default SignIn
