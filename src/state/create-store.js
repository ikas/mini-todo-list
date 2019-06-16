import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunkMiddleware from 'redux-thunk'

import red from './reducers'

const persistedReducer = persistReducer({
  key: 'root',
  storage,
}, red)


export default () => {
  const store = createStore(
    persistedReducer, 
    applyMiddleware(thunkMiddleware)
  )
  const persistor = persistStore(store)
  return { store, persistor }
}
