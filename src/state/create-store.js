import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import red from './reducers'

export default () => createStore(red, applyMiddleware(thunkMiddleware))
