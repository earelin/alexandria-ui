import { createSlice } from '@reduxjs/toolkit'

export const userSliceReducer = createSlice({
  name: 'user',
  initialState: {
    value: null
  },
  reducers: {
    setUserProfile: (state, action) => {
      state.value = action.payload
    },
    removeUserProfile: state => {
      state.value = null
    }
  }
})

export const { setUserProfile, removeUserProfile } = userSliceReducer.actions

export default userSliceReducer.reducer
