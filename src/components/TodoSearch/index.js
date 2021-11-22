import React from 'react'

function TodoSearch ({ searchValue, setSearchValue }) {
  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value)
  }
  return (
    <input
      value={searchValue}
      placeholder='Workout'
      onChange={onChangeSearchValue}
    />
  )
}

export { TodoSearch }
