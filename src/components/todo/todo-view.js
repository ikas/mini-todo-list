import React from 'react'
import styled from 'styled-components'

import EmptyIcon from './assets/empty.js'
import CheckedIcon from './assets/checked.js'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const TodoText = styled.p`
  margin: 0.5rem 1rem;
  cursor: pointer;
`

const Checked = styled(CheckedIcon)`
  cursor: pointer;
`

const Empty = styled(EmptyIcon)`
  cursor: pointer;
`

export default ({ id, todo, done, markTodoAsDone }) => (
  <Wrapper>
    { done 
      ? <Checked width={20} height={20} onClick={() => markTodoAsDone(id)} />
      : <Empty width={20} height={20} onClick={() => markTodoAsDone(id)} />
    }
    <TodoText onClick={() => markTodoAsDone(id)}>
      {todo}
    </TodoText>
  </Wrapper>
)
