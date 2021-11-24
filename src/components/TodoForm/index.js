import React from 'react'
import { TodoContext } from '../../Context/TodoContext'

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
    <form onSubmit={onAdd}>
      <label>...</label>
      <textarea
        value={newTodoValue}
        onChange={(e) => setNewTodoValue(e.target.value)}
        placeholder='Take the curse.'
      />
      <button
        type='button'
        onClick={onCancel}
      >
        Cancelar
      </button>
      <button
        type='submit'
      >
        Añadir
      </button>
    </form>
  )
}

export { TodoForm }
