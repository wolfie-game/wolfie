import React, {useEffect, useState} from 'react'
import UserAuthController from '../../../controllers/user-auth'
import {useNavigate} from 'react-router-dom'
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'
import CanvasComponent from '../../canvas/canvas'
import Button from '../../Button/Button'

const signInInstance = new UserAuthController()

interface IState {
  game: boolean
}

const initialState: IState = {
  game: false
}

function Main() {
  const [state, setState] = useState(initialState)

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

  const handleStart = (event: any) => {
    setState({game: true})
  }

  return (
    <ErrorBoundary>
      <div className="content__canvas">
        {!state.game ? (
          <div className="start">
            <img className="start__img" src="./img/wolf.png"></img>
            <Button
              styleName="form__button button-transparent"
              type="button"
              handler={handleStart}
              >
                Начать игру
            </Button>
          </div>
        ) : (
          <CanvasComponent />
        )}
      </div>
    </ErrorBoundary>
  )
}

export default Main
