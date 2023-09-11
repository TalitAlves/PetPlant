import React, { createContext, useState } from 'react'

export const PlantsContext = createContext()

export const PlantsProvider = (({children})=>{
    PlantsContext.displayName = "PlantsContext"

    const [selectedOption, setSelectedOption] = useState({
        poisonous: null,
        local:null,
        watering:null,
        sunlight: [],
        hardiness: "1-13",


}) ;

return(
    <PlantsContext.Provider value={{selectedOption, setSelectedOption}}>
    {children}
    </PlantsContext.Provider>
)
})

