import React, {useEffect, useState} from 'react'
import UserAuthController from '../../../controllers/user-auth'
import {useNavigate} from 'react-router-dom'
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'
import CanvasComponent from '../../Game/Canvas/Canvas'
import Button from '../../Button/Button'
import {connect} from 'react-redux'
import {PageMeta} from '../../PageMeta/PageMeta'

const signInInstance = new UserAuthController()

interface IState {
  game: boolean
}

const initialState: IState = {
  game: false,
}

function Main(props) {
  const [state, setState] = useState(initialState)
  const [isFullscreen, setIsFullscrenn] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    // console.log('checkin Main store', props.user.value.login)
    // signInInstance
    //   .getUserInfo()
    //   .then((info) => {
    //     if (!info.id) {
    //       navigate('/')
    //     }
    //   })
    //   .catch(() => alert('You are not sign in'))
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
      <PageMeta title="Wolfie" description="Catch the egg!"/>
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
          <CanvasComponent
            width={isFullscreen ? 1200 : 1000}
            height={isFullscreen ? 720 : 657}
            user={props.user?.value?.login}
          />
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

const ConnectedApp = connect((state) => {
  console.log('ConnectedApp main', state)
  return state
})(Main)

export default ConnectedApp
