import React from 'react'

function Container({children}) {
  return (
    <div className='w-full max-w-7xl mx-auto h-auto'>
        {children}
    </div>
  )
}

export default Container