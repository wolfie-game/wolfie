import React, {useState} from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import validation from '../../utils/validation'
import './Modal.scss'

const Modal = ({handleClose, show, updatePassword}) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'
  const initialState = {
    current: '',
    password: '',
    password2: '',
  }
  const [state, setState] = useState(initialState)

  const handleChange = (event: any) => {
    setState({...state, [event.target.name]: event.target.value})
  }
  const submitUpdate = (event: any) => {
    if (
      state.password === state.password2 &&
      validation(state.password, 'password')
    ) {
      console.log('password equeal and valid')
      updatePassword(state.current, state.password)
    } else {
      console.log('password no equal or valid')
    }
  }

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <div className="modal-input-section">
          <Input
            styleName="form__input input"
            type="password"
            name="current"
            value={state.current}
            handler={handleChange}
            placeholder="Current Password"
          />
          <Input
            styleName="form__input input"
            type="password"
            name="password"
            value={state.password}
            handler={handleChange}
            placeholder="New Password"
          />
          <Input
            styleName="form__input input"
            type="password"
            name="password2"
            value={state.password2}
            handler={handleChange}
            placeholder="New Password"
          />
          <Button
            styleName="form__button button-transparent"
            type="button"
            handler={submitUpdate}>
            Submit
          </Button>
          <Button
            styleName="form__button button-transparent"
            type="button"
            handler={handleClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Modal
