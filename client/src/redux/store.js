import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {persistReducer, persistStore} from 'redux-persist'
import userReducer from './user/userSlice' 
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({user: userReducer})

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false, // disable to support Immer.js
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
//export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
//export type AppDispatch = typeof store.dispatch


export const persistor = persistStore(store)