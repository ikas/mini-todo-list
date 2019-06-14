import styled from 'styled-components'

export default styled.p`
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
