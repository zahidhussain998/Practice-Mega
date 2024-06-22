// import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'
import { useState } from 'react'

function Login() {
    
    const [users, setUsers] = useState('')
    const [password, setPassword ] = useState('')
    
    const {setUser} = useContext(UserContext)

    const handleSubmit  = () => {
        
        setUser({users, password})
    }

  return (
    <div>
        
        <input
        type='text'
        placeholder='username'
        value={users}
        onChange={(e) => setUsers(e.target.value)}

        />
          <input
        type='text'
        value={password}
        placeholder='enter password'
        onChange={(e) => setPassword(e.target.value)}

        />

       <button
         onClick={handleSubmit}

       >
              Login 
       </button>

    </div>
  )
}

export default Login