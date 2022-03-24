import React, {useState} from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import validation from '../../utils/validation'
import '../Modal/Modal.scss'

const NewModal = ({handleClose, show}) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'
  const initialState = {
    topic: '',
    message: '',
  }
  const [state, setState] = useState(initialState)

  const handleChange = (event: any) => {
    setState({...state, [event.target.name]: event.target.value})
  }

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <div className="modal-input-section">
          <h3>Добавить новую тему для обсуждения</h3>
          <Button
            styleName="button-close"
            type="button"
            handler={handleClose}>
          </Button>
          <Button
            styleName="form__button button-transparent"
            type="button"
            handler={() => submitUpdate(state.message)}
          >
            Отправить
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NewModal
