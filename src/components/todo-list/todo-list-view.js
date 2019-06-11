import React from 'react'

export default ({ todos }) => (
  <ul>
    { todos.map(todo => <li key={todo.id}>{todo.todo} {todo.done}</li> )}
  </ul>
)
