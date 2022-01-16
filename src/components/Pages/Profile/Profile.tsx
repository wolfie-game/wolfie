import React, {useState, useEffect} from 'react'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import UserAuthController from '../../../controllers/user-auth'
import {useNavigate} from 'react-router-dom'
import Modal from '../../Modal/Modal'

const profileDataRequester = new UserAuthController()

function Profile() {
  const initialState = {
    login: 'admin',
    email: 'admin@wolfie.com',
    maxScore: '100000',
  }
  const [state, setState] = useState(initialState)
  const [modal, setModal] = useState(false)
  const navigate = useNavigate()

  const showModal = () => {
    setModal(true)
  }
  const hideModal = () => {
    setModal(false)
  }

  const passwordRequest = async (oldPwd, newPwd) => {
    await profileDataRequester
      .changePassword(oldPwd, newPwd)
      .then((response) => {
        hideModal()
        console.log(response)
        profileDataRequester.getUserInfo().then((info) => {
          console.log(info)
        })
      })
  }

  const changePassHandler = () => {
    console.log('changePassHandler')
    //show modal
    showModal()
    //chech passwods if equal
    //try to update
  }
  const logOutHandler = () => {
    profileDataRequester.logout()
    navigate('/')
  }

  useEffect(() => {
    profileDataRequester.getUserInfo().then((info) => {
      console.log(info)
      if (!info.id) {
        navigate('/')
      } else {
        setState({
          ...state,
          login: info.login,
          email: info.email,
          maxScore: info.phone,
        })
      }
    })
  }, [])

  return (
    <div className="content__canvas">
      <div className="profile">
        <div className="profile__wrap">
          <Modal
            handleClose={hideModal}
            show={modal}
            updatePassword={passwordRequest}
          />
          <div className="profile__header">
            <div>Max Score:</div>
            <div>{state.maxScore}</div>
          </div>
          <form className="profile__form form" onSubmit={changePassHandler}>
            <Input
              styleName="form__input input"
              type="text"
              name="login"
              value={state.login}
              readOnly={true}
            />
            <Input
              styleName="form__input input"
              type="text"
              name="email"
              value={state.email}
              readOnly={true}
            />
            <Button
              styleName="form__button button"
              type="button"
              handler={changePassHandler}>
              Change Password
            </Button>
          </form>
          <Button
            styleName="form__button button-transparent"
            type="button"
            handler={logOutHandler}>
            Log Out
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Profile
