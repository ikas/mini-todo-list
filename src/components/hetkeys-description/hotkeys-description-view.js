import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 1rem;
`

const HotkeysHeader = styled.h2`
  font-size: 16px;
`

const HotkeyWrapper = styled.div`
  font-size: 12px;
`

export default () => (
  <Wrapper>
    <HotkeysHeader>Available hotkeys</HotkeysHeader>
    <HotkeyWrapper>
      <b>up</b>: Move selected todo up
    </HotkeyWrapper>
    <HotkeyWrapper>
      <b>down</b>: Move selected todo down
    </HotkeyWrapper>
    <HotkeyWrapper>
      <b>enter</b>: Toggle selected todo done status
    </HotkeyWrapper>
    <HotkeyWrapper>
      <b>command+backspace</b>: Delete selected todo
    </HotkeyWrapper>
    <HotkeyWrapper>
      <b>command+down</b>: Focus the new todo input (== add new todos)
    </HotkeyWrapper>
  </Wrapper>
)