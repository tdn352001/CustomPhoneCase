import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counter'
import customizeSlice from './slices/customize'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    customize: customizeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
