import React from 'react'
import { TodoContext } from '../Context/TodoContext'
import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { CreateTodoButton } from '../components/CreateTodoButton'

function AppUI () {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo
  } = React.useContext(TodoContext)
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <p>Wait me a second, loading your TODO's...</p>}
        {(!loading && !searchedTodos.length) && <p>!Create your first TODO!</p>}
        {error && <p>Ups! something was wrong. :/</p>}

        {searchedTodos.map((todo, key) => (
          <TodoItem
            key={key}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  )
}

export { AppUI }
