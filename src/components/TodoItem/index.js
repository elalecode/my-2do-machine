import React from 'react'

function TodoItem ({ text, completed, onComplete, onDelete }) {
  return (
    <li>
      <span onClick={onComplete}>O</span>
      <p>{completed ? '*' : '-'} {text}</p>
      <span onClick={onDelete}>X</span>
    </li>
  )
}

export { TodoItem }
