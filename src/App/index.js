import React from 'react'
import { AppUI } from './AppUI'

function useLocalStorage (itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = window.localStorage.getItem(itemName)
        let parsedItem

        if (!localStorageItem) {
          window.localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        setItem(parsedItem)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }, 3000)
  })

  const saveItem = (newItem) => {
    try {
      const stringiedItem = JSON.stringify(newItem)
      window.localStorage.setItem(itemName, stringiedItem)
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}

function App () {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error

  } = useLocalStorage('2DOS_V1', [])

  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => !!todo.completed)
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.include(searchText)
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <AppUI
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App