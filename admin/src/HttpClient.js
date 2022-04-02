import axios from 'axios'

import config from './config.json'

let User

export async function login(username, password) {
  try {
    const response = await axios.get(`${config['api-base-url']}/user/me`, {
      auth: {
        username: username,
        password: password
      },
    })

    User = {
      name: response.data.name,
      password: password
    }

    return response.data
  } catch (error) {
    console.error("Could not login")
  }
}

export function build() {
  return axios.create({
    auth: {
      username: User.name,
      password: User.password
    }
  })
}
