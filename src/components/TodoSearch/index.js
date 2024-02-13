import React from 'react'
import { TodoContext } from '../../Context/TodoContext'

function TodoSearch () {
  const { searchValue, setSearchValue } = React.useContext(TodoContext)

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value)
  }
  return (
    <input
      value={searchValue}
      placeholder='Buscador'
      onChange={onChangeSearchValue}
      className='search'
    />
  )
}

export { TodoSearch }
