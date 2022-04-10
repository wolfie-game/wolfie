import React, {useState} from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import validation from '../../utils/validation'
import '../Modal/Modal.scss'

const NewModal = ({handleClose, show, addTopic}) => {
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
          <Input
            styleName="form__input input"
            type="text"
            name="topic"
            value={state.topic}
            readOnly={true}
            placeholder="Тема"
          />
          <textarea 
            className="forum__textarea forum__textarea_new-topic"
            name="message"
            value={state.message}
            onChange={handleChange}
            placeholder="Сообщение" 
          />
          <Button
            styleName="form__button button-transparent"
            type="button"
            handler={() => addTopic(state)}
          >
            Создать
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NewModal
