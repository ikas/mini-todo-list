import React from 'react'
import styled from 'styled-components'

import NewTodo from '../new-todo'
import ListTitle from '../list-title'
import Todo from '../todo'

const Wrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`

export default ({ todos }) => (
  <Wrapper>
    <ListTitle>I need to...</ListTitle>
    { todos.map(todo => <Todo 
      key={todo.id}
      id={todo.id}
      todo={todo.todo}
      done={todo.done}
    />)}
    <NewTodo />
  </Wrapper>
)
