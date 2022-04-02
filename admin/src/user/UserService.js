import store from '../store'
import {setUserProfile} from './userSliceReducer'
import {build, login} from '../HttpClient'

export async function loginUser(username, password) {
  const user = await login(username, password)
    .then(currentUser => ({
      ...currentUser,
      password: password
    }))

  store.dispatch(setUserProfile(user))
}

export async function getUsersList() {
  return build()
    .get('user')
    .then(response => response.data)
}
