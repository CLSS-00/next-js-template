import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInterviewerSkill, IUserInfo } from './types'

type State = {
  skills: IInterviewerSkill[] | null
  info: IUserInfo | null
}

const name = 'user'

export const initialState: State = {
  skills: null,
  info: null,
}

const { actions, reducer } = createSlice({
  name,
  initialState,
  reducers: {
    setSkills(state, { payload }: PayloadAction<IInterviewerSkill[] | null>) {
      state.skills = payload
    },
    setInfo(state, { payload }: PayloadAction<IUserInfo | null>) {
      state.info = payload
    },
  },
})

export const { setSkills } = actions
export default reducer
