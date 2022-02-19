import { IAppDispatch } from 'store'
import { setSkills } from '..'
// import { IInterviewerSkill } from '../types'

import axios from 'axios'
export const getInterviewerSkills = () => async (dispatch: IAppDispatch) => {
  const res = await axios.get('/api/interviewer/skills')
  if (res.data) {
    dispatch(setSkills(res.data))
  }
}

