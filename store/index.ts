import { configureStore } from '@reduxjs/toolkit'
import ui from './reducers/ui'
import user from './user'

const store = configureStore({
  reducer: {
    ui,
    user,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
export type IAppDispatch = typeof store.dispatch
export type IRootState = ReturnType<typeof store.getState>
export default store

