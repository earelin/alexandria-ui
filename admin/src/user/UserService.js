import store from '../store'
import {setUserProfile} from './userSliceReducer'

export function loginUser(username, password) {
  store.dispatch(setUserProfile({
    username: username,
    password: password
  }))
}
