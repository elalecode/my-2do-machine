import React from 'react'

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

export { useLocalStorage }
