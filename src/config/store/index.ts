import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/user.slice'
import conffetiReducer from './reducers/confetti.slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    confetti: conffetiReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch