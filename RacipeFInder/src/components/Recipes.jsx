import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Recipes() {
  const [Userdata, setUserData] = useState([])


  useEffect(() => {
      const handleFetch = async () => {
        const response = await axios.get('/recipes.json')
        console.log(response.data)
        setUserData(response.data)
      }
    handleFetch()
    
  }, [])
  

  return (
    <React.Fragment className="">
     <div className="">
    {/* Header: TODO */}
      {Userdata.length > 0 ? (
        Userdata.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt='image'/>
            <h2>name : {item.name}</h2>
            <h2>cuisine : {item.cuisine}</h2>
            {item.ingredients.map((ingri,index) => (
                <p key={index}>ingredients : {ingri}</p>
            
            ))}
            <p>{item.time}</p>

            {item.steps.map((steps,index) => (
                <p key={index}>steps : {steps}</p>
            
            ))}
            </div>
             
            ))
      ) : null}
     </div>
    </React.Fragment>
  )
}

export default Recipes;
