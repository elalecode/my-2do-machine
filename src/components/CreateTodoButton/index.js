import React from 'react'
import { FaPlus } from "react-icons/fa6";
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
      <FaPlus />
    </button>
  )
}

export { CreateTodoButton }
