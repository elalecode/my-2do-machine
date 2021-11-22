import React from 'react'

function TodoList ({ children }) {
  return (
    <section>
      <ul>
        {children}
      </ul>
    </section>
  )
}

export { TodoList }
