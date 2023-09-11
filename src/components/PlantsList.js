import React, { useContext } from 'react'
import { ApiContext } from '../context/Api'
import PlantCard from './PlantCard'
import '../styles/PlantsList.css'

function PlantsList() {
 
  const {data, setData} = useContext(ApiContext)

  return (
    <div className='plants-grid'>
    {data.map((plant)=> (
      <div key={plant.id} className='plant-items'>
      <PlantCard plant={plant}/>
      </div>
    ))}
      
    </div>
  )
}

export default PlantsList
