import React from 'react'
import '../styles/PlantCard.css'
import noimage from '../imgs/no-image.png'
import { Link } from 'react-router-dom'

function PlantCard({plant}) {

    return (
    <>
    <div className='card-title'>{plant.common_name}</div>
    <div className='plant-img'>
    {plant.default_image && plant.default_image.original_url ?
      <img src={plant.default_image.original_url} alt={plant.common_name}/> 
      :<img src={noimage} alt={plant.common_name}/>
    }
    </div>
    <Link to={`${plant.id}`}>
    <button className='btn-details'>Details</button>
    </Link>
    </>
  )
}

export default PlantCard
