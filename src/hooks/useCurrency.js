import {useEffect,useState} from 'react'

function useCurrency(currency) {

    const [data, setData] = useState ({})

    useEffect(() => {
        fetch(` https://currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res) => res.json())


       .then((res) => setData(res[currency]))
       console.log(data)
    }, [currency])


    return data
    

   
  
}

export default useCurrency


// const [data, setData] = useState({})

// useEffect(()=>{
//     //data fetching using fetch api
//     fetch(` https://currency-api.pages.dev/v1/currencies/${currency}.json`)
//     .then((res) => res.json())
//     // converted data in the form of json
//     .then((res) => setData(res[currency]))
//     //holding the data in the state
//     console.log(data)
// }, [currency])
