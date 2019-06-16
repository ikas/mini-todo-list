import React, { useState } from 'react'
import styled from 'styled-components'

import Bin from './assets/bin'
import Checked from './assets/checked'
import Empty from './assets/empty'

import TodoText from './todo-text'

const OuterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
  border-radius: 5px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`

const BinWrapper = styled.button`
  background: transparent;
  border-radius: 12px;
  width: 20px;
  height: 28px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition:all 0.2s ease 0s;
  padding: 0;
  border: none;
  cursor: pointer;
  outline: none;
  color: white;
  overflow: hidden;

  &.deleting {
    width: 90px;
  }

  &.deleting::before {
    content: 'Confirm?';
    padding-right: 4px;
  }
`

export default ({ 
  id, 
  todo, 
  done, 
  toggleDoneStatus,
  deleteTodo,
}) => {
  const [deleting, setDeleting] = useState(false)

  return (
    <OuterWrapper className="todo-wrapper">
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
      <BinWrapper 
        className={deleting ? 'deleting' : 'not-deleting'}
        onClick={() => {
          if(!deleting) {
            setDeleting(true)
            setTimeout(() => setDeleting(false), 5000)
          } else {
            deleteTodo(id)
          }
        }}
      >
        <Bin width={20} height={20} />
      </BinWrapper>
    </OuterWrapper>
  )
}
