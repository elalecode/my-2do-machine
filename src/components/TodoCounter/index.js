import React from 'react'
import { TodoContext } from '../../Context/TodoContext'

function TodoCounter () {
  const { totalTodos, completedTodos } = React.useContext(TodoContext)

  return (
    <h2>Has completado {completedTodos} de {totalTodos} TODO's</h2>
  )
}

export { TodoCounter }
