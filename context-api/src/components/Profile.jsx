/* eslint-disable no-unused-vars */
import React,{useContext} from 'react'
import UserContext from '../context/UseContext'

function Profile() {
    const {user} = useContext(UserContext)


    if(!user) return <div>please login first</div>
    return (

        <div>
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
        </div>
    )
}

export default Profile