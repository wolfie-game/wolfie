import React, {useEffect, useState} from 'react'
import UserAuthController from '../../../controllers/user-auth'
import {useNavigate} from 'react-router-dom'
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'
import CanvasComponent from '../../Canvas/Canvas'
import Button from '../../Button/Button'

const signInInstance = new UserAuthController()

interface IState {
  game: boolean
}

const initialState: IState = {
  game: false,
}

function Main() {
  const [state, setState] = useState(initialState)
  const [isFullscreen, setIsFullscrenn] = useState(false)

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

  const toggleFullscrenn = () => {
    const canvas = document.getElementById('canvas')
    if (!document.fullscreenElement && canvas) {
      canvas.requestFullscreen()
      setIsFullscrenn(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullscrenn(false)
      }
    }
  }

  return (
    <ErrorBoundary>
      <div className="content__canvas" id="canvas">
        {!state.game ? (
          <div className="start">
            <img className="start__img" src="./img/wolf.png"></img>
            <Button
              styleName="form__button button-transparent"
              type="button"
              handler={handleStart}>
              Начать игру
            </Button>
          </div>
        ) : (
          <CanvasComponent />
        )}
        <Button
          styleName="fullscrenn_button"
          type="button"
          handler={toggleFullscrenn}>
          {isFullscreen ? 'Close Fullscreen' : 'Fullscreen'}
        </Button>
      </div>
    </ErrorBoundary>
  )
}

export default Main
