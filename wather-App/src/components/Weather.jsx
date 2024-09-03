// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'

function Weather() {

  const [userdata, setUserdata] = useState(null)
  const [city, setCity] = useState ('')

  const API_KEY = '665eb4b1d3f13eeee6fcef81f4b251b5';

  const dataFetcher = async(city) => {
    if(!city) return;

    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      const data = await res.json()
  
      setUserdata(data)
      
    } catch (error) {
      console.log(error)
    }
 
  }

  const cityhandler = (e) => {
    e.preventDefault()
    dataFetcher(city)
  }

  const inputhandle = (e) => {
    setCity(e.target.value)
  }
   




  return (
    <>
    <div>
      <form 
       onSubmit={cityhandler}

      >

        <input
        type="text"
        placeholder="Enter City"
        onChange={inputhandle}
        />

        <button
        type="submit"
        >Search</button>

        {userdata ? (
        <div>
        <h2>{userdata.name}</h2>
        <h3>{userdata.weather[0].description}</h3>
        <h3>{userdata.main.temp}°C</h3>
      </div>

        ): null}


      </form>
    </div>

    
    </>
  )
}

export default Weather