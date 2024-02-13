import React from 'react'
import { TodoContext } from '../../Context/TodoContext'
import './style.css'

function TodoForm () {
  const [newTodoValue, setNewTodoValue] = React.useState('')
  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext)

  const onCancel = () => {
    setOpenModal(false)
  }
  const onAdd = (e) => {
    e.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
  }
  return (
    <div className='TodoForm'>
      <form onSubmit={onAdd}>
        <div className='TodoForm-Header'>
          <h2 className='TodoForm-Header_title'>Agrega un nuevo TODO</h2>
        </div>
        <div className='TodoForm-Content'>
          <textarea
            value={newTodoValue}
            onChange={(e) => setNewTodoValue(e.target.value)}
            placeholder='Agrega un nuevo TODO.'
            className='TodoForm-Content_textarea'
          />
        </div>
        <div className='TodoForm-Footer'>
          <button
            type='button'
            onClick={onCancel}
            className='TodoForm-Footer_cancelbtn'
          >
            Cancelar
          </button>
          <button
            type='submit'
            className='TodoForm-Footer_addbtn'
          >
            Añadir
          </button>
        </div>
      </form>
    </div>
  )
}

export { TodoForm }
