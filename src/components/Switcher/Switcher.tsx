import React, {MouseEventHandler, useContext} from 'react'
import {ThemeContext} from '../../utils/context/ThemeContext'
// import {SwitcherProps} from './types'
import './Switcher.scss'

const Switcher = ({id, styleName, handler}) => {
	const theme = useContext(ThemeContext)

  return (
  	<div className={styleName}>
  		<span className={theme == 'light' ? 'switcher__name switcher__name_light' : 'switcher__name'}>Светлая тема</span>
  		<label 
  			className="switcher__label" 
  			htmlFor={id}
  		>
  			<input
		    	id={id}
		      className="switcher__input"
		      type="checkbox"
		      onChange={(e) => handler(e)}
		      checked={theme == 'light' ? true : false}
		    />
		    <span className={theme == 'light' ? 'switcher__slider switcher__slider_light' : 'switcher__slider'}></span>
  		</label>
    </div>
  )
}

export default Switcher