import React, {Component} from 'react'

class Profile extends Component {
  render(){
    return (
      <div className="content__canvas">
        <div className="profile">
          <div className="profile__wrap">
            <div className="profile__header">
              <div>Max Score:</div>
              <div>100000</div>
            </div>
            <form className="profile__form form">
              <input className="form__input input" type="text" name="login" value="admin" />
              <input className="form__input input" type="text" name="email" value="admin@wolfie.com" />
              <button className="form__button button" type="button">Change Password</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Profile
