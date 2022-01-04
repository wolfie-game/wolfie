import React, {Component} from 'react'
import Input from '../../Input/Input'
import Button from '../../Button/Button'

class SignUp extends Component {
  state = {
    login: '',
    email: '',
    password: '',
    password2: ''
  }

  signupHandler = () => {
    console.log('signupHandler')
  }

  handleChange = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render(){
    return (
      <div className="content__canvas">
        <form className="form form_auth">
          <Input styleName="form__input input" type="text" name="login" 
            value={this.state.login} placeholder="Login" handler={this.handleChange} 
          />
          <Input styleName="form__input input" type="text" name="email" 
            value={this.state.email} placeholder="Email" handler={this.handleChange} 
          />
          <Input styleName="form__input input" type="password" name="password" 
            value={this.state.password} placeholder="Password" handler={this.handleChange} 
          />
          <Input styleName="form__input input" type="password" name="password2" 
            value={this.state.password2} placeholder="Repeat password" handler={this.handleChange} 
          />
          <Button styleName="form__button button" type="button" handler={this.signupHandler}>Sign Up</Button>
        </form>
      </div>
    )
  }
}
export default SignUp
