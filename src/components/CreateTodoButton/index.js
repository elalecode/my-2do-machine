import React from 'react'
import './style.css'

function CreateTodoButton ({ setOpenModal }) {
  const handleToggleModal = () => {
    setOpenModal(prevState => !prevState)
  }
  return (
    <button
      className='float-btn'
      onClick={handleToggleModal}
    >
      +
    </button>
  )
}

export { CreateTodoButton }
