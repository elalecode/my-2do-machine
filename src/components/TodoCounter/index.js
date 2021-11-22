import React from 'react'

function TodoCounter ({ total, completed }) {
  return (
    <h2>Has completado {completed} de {total} TODO's</h2>
  )
}

export { TodoCounter }
