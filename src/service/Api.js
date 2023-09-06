import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Api() {
    const apiKey = 'sk-8UXs64f86f09589372089'
    const [data, setData] = useState([])
    const [details, setDetails] = useState([])

    useEffect(()=>{
        axios.get(`https://perenual.com/api/species/details/2272?key=${apiKey}`)
        .then((response)=>{
            console.log(response.data)
            setDetails(response)
        })
    },[])

    useEffect(()=>{
        axios.get(`https://perenual.com/api/species-list?page=1&key=${apiKey}&edible=0&poisonous=1&indoor=1&hardiness=1-13`)
        .then((response)=>{
            console.log(response.data)
            setData(response)
        })
    },[])
    
  return (
    <div>
      
    </div>
  )
}

export default Api
