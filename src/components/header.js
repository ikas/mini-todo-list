import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 2rem;
`

const Header = styled.h1`
  font-size: 32px;
`

const Subtitle = styled.span`
  font-size: 16px;
  font-weight: normal;
  margin-left: 16px;
`

export default () => (
  <Wrapper>
    <Header>
      Mini Todo List
      <Subtitle>A minimalistic todo list with a friendly UI.</Subtitle>
    </Header>
  </Wrapper>
)
