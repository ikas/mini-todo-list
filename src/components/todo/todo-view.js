import React from 'react'
import styled from 'styled-components'

import Bin from './assets/bin'
import Checked from './assets/checked'
import Empty from './assets/empty'

const OuterWrapper = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
  border-radius: 5px;
  justify-content: space-between;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`

const TodoText = styled.p`
  position: relative;
  margin: 0 1rem;
  line-height: 20px;
  font-size: 16px;
  color: ${props => props.done ? 'grey' : 'white' };

  @keyframes strike {
    0%   { width: 0; }
    100% { width: 100%; }
  }

  &.striked::after {
    content: ' ';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: white;
    animation-name: strike;
    animation-duration: 0.2s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards; 
  }
`

export default ({ id, todo, done, toggleDoneStatus }) => (
  <OuterWrapper>
    <Wrapper onClick={() => toggleDoneStatus(id)}>
      { done 
        ? <Checked width={20} height={20} />
        : <Empty width={20} height={20} />
      }
      <TodoText 
        className={done ? 'striked' : ''} 
        done={done}
      >{todo}</TodoText>
    </Wrapper>
    <Bin width={20} height={20} onClick={() => console.log('delete')} />
  </OuterWrapper>
)
