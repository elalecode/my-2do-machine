import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";

function TodoItem ({ text, completed, onComplete, onDelete }) {
  return (
    <li>
      <div className='round'>
        <input type='checkbox' onClick={onComplete} id={text} checked={completed} />
        <label for={text}></label>
      </div>
      <p className={completed ? 'checked' : 'unchecked'}>{text}</p>
      <span className='TodoItem-button_delete' onClick={onDelete}>
        <FaRegTrashCan />
      </span>
    </li>
  )
}

export { TodoItem }
