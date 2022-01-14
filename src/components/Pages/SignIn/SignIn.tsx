import React, {Component} from 'react'
import Input from '../../Input/Input'
import Button from '../../Button/Button'

class SignIn extends Component {
  state = {
    login: '',
    email: ''
  }

  signinHandler = () => {
    console.log('signinHandler')
  }

  handleChange = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return (
      <div className="content__canvas">
        <form className="form form_auth" onSubmit={this.signinHandler}>
          <Input styleName="form__input input" type="text" name="login" 
            value={this.state.login} handler={this.handleChange} placeholder="Login" 
          />
          <Input styleName="form__input input" type="text" name="password" 
            value={this.state.email} handler={this.handleChange} placeholder="Password" 
          />
          <Button styleName="form__button button" type="button" handler={this.signinHandler}>Sign In</Button>
        </form>
      </div>
    )
  }
}
export default SignIn
