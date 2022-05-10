import React from 'react'
import './styles.css'

/**
 * @typedef PropTypes
 * @property { React.ReactNode } children - Insert text or element beside checkbox
 * @property { boolean } checked - Checkbox's checkmark
 * @property { React.ChangeEventHandler<HTMLInputElement> } onChange - Checkbox's onChange event
 * @property { string } classNameDiv - Add your own css class style into main checkbox element
 * @property { string } name - Add name for input
 */

/**
 * Custom checkbox design (default use in Cart page)
 * @typedef PropTypes
 * @property { PropTypes } children
 * @property { PropTypes } checked
 * @property { PropTypes } onChange
 * @property { PropTypes } classNameDiv
 * @property { PropTypes } name
 */

export default function Checkbox({ children, checked = false, onChange, classNameDiv, name, ...rest }) {
     return (
          <label className={`container ${classNameDiv}`}>{children}
               <input type="checkbox" name={name} checked={checked} onChange={onChange} onClick={onClick} {...rest} />
               <span className="checkmark"></span>
          </label>
     )
}
