import {configureStore} from '@reduxjs/toolkit'
import userSliceReducer from './user/userSliceReducer'

export default configureStore({
  reducer: {
    user: userSliceReducer
  }
})
