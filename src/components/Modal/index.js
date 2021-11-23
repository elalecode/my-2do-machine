import React from 'react'
import './style.css'

function Modal (props) {
  return (
    <div className='todo-modal'>
      {props.children}
    </div>
  )
}

export { Modal }
