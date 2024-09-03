import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import Providers from './context/Providers'
function App() {
  return (
    <Providers>
      <div>
        <h1>
          hey world
        <Login/>
        <Profile/>
        </h1>
      </div>
    </Providers>
  )
}

export default App
