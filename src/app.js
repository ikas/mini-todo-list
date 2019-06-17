import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// Import modern-normalize & fonts
import 'modern-normalize/modern-normalize.css'

// Import Redux store
import createStore from './state/create-store'

// Import Components
import KeyMapper from './components/key-mapper'
import Container from './components/container'
import Header from './components/header'
import TodoList from './components/todo-list'

// Global Style
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');

  body {
    font-family: 'Ubuntu', sans-serif;
    background: #171717;
    color: #fff;
    padding: 1em;
    line-height: 1.8em;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    word-wrap: break-word;
  }
`;

// Main page
class App extends React.Component {
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

  render() {
    this.registerServiceWorker()
    const { store, persistor } = createStore()
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <KeyMapper>
            <GlobalStyle/>
            <Container>
              <Header />
              <TodoList />
            </Container>
          </KeyMapper>
        </PersistGate>
      </Provider>
    )
  }
}

export default hot(App);
