import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Blogs() {
    const [data, setData] = useState([])

      const API ="https://newsapi.org/v2/everything?q=tesla&from=2024-12-01&sortBy=publishedAt&apiKey=9f7b4fb7e77d45c89aa425e937e55866"
         console.log(API)

      const fetchData = async () => {

        try {
            const res = await axios.get(API)
            console.log(res.data)

            setData(res.data.articles)
            
        } catch (error) {
            console.log(error)
        }
    }

      useEffect(() => {

        

        fetchData()
        
        
      }, [])
      
      return (
        <div className="flex flex-wrap justify-center p-4">
        {data?.map((item) => (
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white transition-transform transform hover:scale-105" key={item.url}>
                <img className="w-full h-48 object-cover" src={item.urlToImage} alt={item.title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{item.title}</div>
                    <p className="text-gray-700 text-base mb-2">By {item.author}</p>
                    <p className="text-gray-700 text-base mb-4">{item.description}</p>
                    <p className="text-gray-500 text-xs">{new Date(item.publishedAt).toLocaleDateString()}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Read More
                    </a>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Blogs