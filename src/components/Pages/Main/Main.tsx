import React, {useEffect} from 'react'
import UserAuthController from '../../../controllers/user-auth'
import {useNavigate} from 'react-router-dom'

const signInInstance = new UserAuthController()

function Main() {
  const navigate = useNavigate()

  useEffect(() => {
    signInInstance
      .getUserInfo()
      .then((info) => {
        console.log(info)
        if (!info.id) {
          navigate('/')
        }
      })
      .catch(() => alert('You are not sign in'))
  }, [])

  return <div className="content__canvas"></div>
}
export default Main
