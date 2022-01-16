import React, {Component} from 'react'
import Input from '../../Input/Input'
import Button from '../../Button/Button'

class Profile extends Component {
  state = {
    login: 'admin',
    email: 'admin@wolfie.com',
    maxScore: '100000',
    isLoggedIn: false
  }

  changePassHandler = () => {
    console.log('changePassHandler')
  }
  render(): JSX.Element {
    if (!this.state.isLoggedIn) {
      //return <Redirect to='/profile' />
      console.log(this.state.isLoggedIn)
    }

    return (
      <div className="content__canvas">
        <div className="profile">
          <div className="profile__wrap">
            <div className="profile__header">
              <div>Max Score:</div>
              <div>{this.state.maxScore}</div>
            </div>
            <form
              className="profile__form form"
              onSubmit={this.changePassHandler}>
              <Input
                styleName="form__input input"
                type="text"
                name="login"
                value={this.state.login}
                readOnly={true}
              />
              <Input
                styleName="form__input input"
                type="text"
                name="email"
                value={this.state.email}
                readOnly={true}
              />
              <Button
                styleName="form__button button"
                type="button"
                handler={this.changePassHandler}>
                Change Password
              </Button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Profile
