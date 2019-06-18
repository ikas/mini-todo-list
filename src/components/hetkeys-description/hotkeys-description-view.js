import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  align-self: flex-end;
  justify-self: flex-end;
  text-align: right;
`

const HotkeysHeader = styled.h2`
  font-size: 18px;
`

const HotkeyWrapper = styled.div`
  font-size: 14px;
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
  </Wrapper>
)