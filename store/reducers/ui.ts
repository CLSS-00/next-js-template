import { createSlice, PayloadAction } from '@reduxjs/toolkit'
type State = {
  toast: null | { message: string }
  isLoading: boolean
}

const name = 'ui'
export const initialState: State = {
  toast: null,
  isLoading: false,
}

const { actions, reducer } = createSlice({
  name,
  initialState,
  reducers: {
    setIsLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload
    },
  },
})

export const { setIsLoading } = actions
export default reducer
