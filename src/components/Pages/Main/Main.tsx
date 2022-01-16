import React, {useEffect} from 'react'
import UserAuthController from '../../../controllers/user-auth'
import {useNavigate} from 'react-router-dom'
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'
import CanvasComponent from '../../canvas/canvas'

const signInInstance = new UserAuthController()

function Main() {
  const navigate = useNavigate()

  useEffect(() => {
    signInInstance
      .getUserInfo()
      .then((info) => {
        if (!info.id) {
          navigate('/')
        }
      })
      .catch(() => alert('You are not sign in'))
  }, [])

  return (
    <ErrorBoundary>
      <div className="content__canvas">
        <CanvasComponent />
      </div>
    </ErrorBoundary>
  )

}
export default Main
