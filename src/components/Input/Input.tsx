import React, {useState} from 'react'
import validation from '../../utils/validation'
import {InputProps} from './types'

const Input = (props: InputProps) => {
  const [showError, setShowError] = useState(false)
  function handleOnBlur() {
    if (!validation(props.value, props.name)) {
      setShowError(true)
    } else {
      setShowError(false)
    }
  }

  return (
    <div className="input__field">
      <label className={'input__error'}>
        {showError ? `The ${props.placeholder} not correct` : ''}
      </label>
      <input
        className={props.styleName}
        type={props.type}
        name={props.name}
        value={props.value}
        readOnly={props.readOnly}
        placeholder={props.placeholder}
        onChange={props.handler}
        onBlur={handleOnBlur}
      />
    </div>
  )
}

export default Input
