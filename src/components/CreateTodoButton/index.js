import React from 'react'

function CreateTodoButton ({ setOpenModal }) {
  return (
    <button
      onClick={() => setOpenModal(true)}
    >
      +
    </button>
  )
}

export { CreateTodoButton }
