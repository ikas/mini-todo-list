import React from 'react'
import styled from 'styled-components'

import Empty from './assets/empty.js'
import Checked from './assets/checked.js'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const TodoText = styled.p`
  margin: 0.5rem 1rem;
`

export default ({ todo, done }) => (
  <Wrapper>
    { done 
      ? <Checked width={20} height={20} />
      : <Empty width={20} height={20} />
    }
    <TodoText>{todo}</TodoText>
  </Wrapper>
)
