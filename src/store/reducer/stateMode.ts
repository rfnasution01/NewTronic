import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type StateModeType = {
  isLight: boolean
}

const initialState: StateModeType = {
  isLight: true,
}

const stateModeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setStateMode: (state, action: PayloadAction<StateModeType>) => {
      const { isLight } = action.payload
      state.isLight = isLight
    },
  },
})

export const { setStateMode } = stateModeSlice.actions

export const getModeSlice = (state: { stateMode: StateModeType }) =>
  state.stateMode

export default stateModeSlice.reducer
