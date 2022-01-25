import React, {useState, useEffect} from 'react'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'
import UserAuthController from '../../../controllers/user-auth'
import {useNavigate} from 'react-router-dom'
import Modal from '../../Modal/Modal'
import {RootStateOrAny, useSelector} from 'react-redux'

const profileDataRequester = new UserAuthController()

function Profile() {
  const initialState = {
    login: 'admin',
    email: 'admin@wolfie.com',
  }
  const [state, setState] = useState(initialState)
  const [modal, setModal] = useState(false)
  const navigate = useNavigate()

  const userData = useSelector((state: RootStateOrAny) => state.user)
  console.log(userData, typeof userData)

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
    showModal()
  }
  const logOutHandler = () => {
    profileDataRequester.logout()
    navigate('/')
  }

  useEffect(() => {
    /*if (!userData.auth) {
      navigate('/')
    }*/

    profileDataRequester.getUserInfo().then((info) => {
      console.log(info)
      if (!info.id) {
        navigate('/')
      } else {
        setState({
          ...state,
          login: info.login,
          email: info.email,
        })
      }
    })
  }, [])

  return (
    <ErrorBoundary>
      <div className="content__canvas">
        <div className="profile">
          <div className="profile__wrap">
            <Modal
              handleClose={hideModal}
              show={modal}
              updatePassword={passwordRequest}
            />
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
                styleName="form__button button-transparent"
                type="button"
                handler={logOutHandler}>
                Log Out
              </Button>
            </form>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default Profile
