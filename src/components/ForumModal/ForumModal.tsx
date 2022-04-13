import React, {useState} from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import validation from '../../utils/validation'
import '../Modal/Modal.scss'

const ForumModal = ({handleClose, addComment, show, data}) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'
  const initialState = {
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
          {data &&
            data.messages?.map((item) => (
              <div className="forum__message" key={item.id}>
                <div className="forum__message-text">{item.message}</div>
                <div className="forum__username">
                  {item.userName}
                </div>
              </div>
            ))}
            <textarea 
              className="forum__textarea"
              name="message"
              value={state.message}
              onChange={handleChange}
              placeholder="Сообщение" 
            />
          <Button
            styleName="button-close"
            type="button"
            handler={handleClose}>
          </Button>
          <Button
            styleName="form__button button-transparent"
            type="button"
            handler={() => addComment(state.message)}
          >
            Отправить
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ForumModal
