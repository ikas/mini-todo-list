import React from 'react'
import styled from 'styled-components'

import ListTitle from '../list-title'
import Todo from '../todo'

const Wrapper = styled.div`
  margin-bottom: 2rem;
`

export default ({ todos }) => (
  <Wrapper>
    <ListTitle>I need to...</ListTitle>
    { todos.length === 0 && <p>No tasks yet! Add tasks below.</p> }
    { todos.map(todo => <Todo 
        key={todo.id}
        id={todo.id}
        todo={todo.todo}
        done={todo.done}
      />)}
  </Wrapper>
)
