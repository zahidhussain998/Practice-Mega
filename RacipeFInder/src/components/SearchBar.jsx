import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Searh } from '../utils/Searh'


function SearchBar() {
    const [recipes, setRacipes] = useState([])
    const [Search, setSearch] = useState('')
    const [filteredRacipes, setFilteredRacipes] = useState([])
  
   

    const hanleSearch = (e) => {
        const query = e.target.value
        setSearch(query)

        const Utilshandle = Searh(recipes, query)
        setFilteredRacipes(Utilshandle)
    }
    

    useEffect(() => {
        const handleFetch = async () => {
          const response = await axios.get('/recipes.json')
          console.log(response.data)
          setRacipes(response.data)
        }
      handleFetch()
      
    }, [])
  return (
    <div>
        <input value={Search} onChange={hanleSearch} type="text" placeholder="Search..." />
        {filteredRacipes?.map((recipe) => (
                <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                    <h2>{recipe.name}</h2>
                    <img src={recipe.image} alt="" />
                    <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                    <p><strong>Time:</strong> {recipe.time} minutes</p>
                </div>
            ))}
    </div>
  )
}

export default SearchBar