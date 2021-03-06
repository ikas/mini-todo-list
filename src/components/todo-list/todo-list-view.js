import React from 'react'
import styled from 'styled-components'

import NewTodo from '../new-todo'
import Todo from '../todo'

import ListTitle from './list-title'

const Wrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`

export default ({ todos, currentSelection }) => (
  <Wrapper id="todo-list">
    <ListTitle>I need to...</ListTitle>
    { todos.map((todo, idx) => <Todo 
      key={todo.id}
      id={todo.id}
      todo={todo.todo}
      done={todo.done}
      selected={idx === currentSelection}
    />)}
    <NewTodo />
  </Wrapper>
)
