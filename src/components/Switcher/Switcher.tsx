import React from 'react'
// import {SwitcherProps} from './types'
import './Switcher.scss'

const Switcher = ({id, styleName}) => {
  return (
  	<div className={styleName}>
  		<span className="switcher__name">Классная тема</span>
  		<label 
  			className="switcher__label" 
  			htmlFor={id}
  		>
  			<input
		    	id={id}
		      	className="switcher__input"
		      	type="checkbox"
		    />
		    <span className="switcher__slider"></span>
  		</label>
	    
    </div>
    
  )
}

export default Switcher