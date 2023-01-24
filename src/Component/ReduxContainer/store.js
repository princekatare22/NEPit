import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const UserpersistedReducer = persistReducer(persistConfig, userReducer)

export const store =  configureStore({
  reducer: {
    user: UserpersistedReducer,
  },
  // {window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()},
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})
// store = createStore(
// +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());  
// );
export let persistor = persistStore(store);