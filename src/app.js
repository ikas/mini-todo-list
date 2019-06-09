import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {hot} from 'react-hot-loader/root';

// Import modern-normalize & fonts
import 'modern-normalize/modern-normalize.css';
import woff2 from '../public/fonts/open-sans-v16-latin-regular.woff2';
import woff from '../public/fonts/open-sans-v16-latin-regular.woff';

// Import Components
import Container from './components/container';
import Header from './components/header';
import TodoList from './components/todo-list';
import NewTodoForm from './components/new-todo-form';

// Global Style
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
        url('${woff2}') format('woff2'),
        url('${woff}') format('woff'); 
  }

  body {
    font-family: Open Sans, Segoe UI, Tahoma, sans-serif !important;
    background: #212121;
    color: #fff;
    padding: 1em;
    line-height: 1.8em;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    word-wrap: break-word
  }
`;

// Main page
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
    }
  }

  registerServiceWorker() {
    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
          console.log('SW registered:', registration);
        }).catch(error => {
          console.log('SW registration failed:', error);
        });
      });
    }
  }

  createTodo(todo) {
    const { todos } = this.state
    todos.push({ id: todos.length + 1, todo, done: false })
    this.setState({ todos })
  }

  render() {
    this.registerServiceWorker()

    const { todos } = this.state
    return (
      <>
        <GlobalStyle/>
        <Container>
          <Header>Mini Todo List</Header>
          <p>A minimalistic todo list with a friendly UI.</p>
          <TodoList todos={todos} />
          <NewTodoForm createTodo={todo => this.createTodo(todo) }/>
        </Container>
      </>
    )
  }
}

export default hot(App);
