import React, {useEffect, useState} from 'react'
import {getUsersList} from './UserService'

export default function UserList() {
  const [userList, setUserList] = useState({content: []});

  useEffect( () => {
    getUsersList()
      .then(userData => setUserList(userData))
  })

  return (
    <div>
      <h1>Users</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {userList.content.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
