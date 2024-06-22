
import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {

 const [loding, setLoding]  = useState(true)

 const dispatch = useDispatch()


 useEffect(() => {
  authService.getCurrentUser().then((userData) => {
    if(userData){
      dispatch(login({userData}))
    }else{
      dispatch(logout())
    }
  } )
  .finally(() => setLoding(false))
 }, [])
  
 
 return !loding ? (
  <div className='min-h-screen flex flex-wrap  conten'>

<div className='w-full block'>
  <Header/>
  <main>
    todo <Outlet/>
  </main>
  <Footer/>
  </div>  
  </div>

 ) : (
  <div>
    this is the new one
  </div>
 )
}

export default App
