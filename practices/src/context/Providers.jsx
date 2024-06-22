// eslint-disable-next-line no-unused-vars
import React from 'react'
import UserContext from './UserContext'

// eslint-disable-next-line react/prop-types
function Providers({children}) {
    const [users, setUser] = React.useState({})
  return (
    <UserContext.Provider value={{users, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default Providers