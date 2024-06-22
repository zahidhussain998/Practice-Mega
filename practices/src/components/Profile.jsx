// eslint-disable-next-line no-unused-vars
import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'
function Profile() {

    const {users} = useContext(UserContext)

    if(!users) return <div>please login</div>
  return (
    <div>
    <h3>email: {users.users}</h3>
    <h3>password: {users.password}</h3>
    </div>
    
  )
}

export default Profile