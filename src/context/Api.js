import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { PlantsContext } from "./PlantsContext";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  ApiContext.displayName = "Api";

  const apiKey = "sk-8UXs64f86f09589372089";
  const [data, setData] = useState([]);
 
  const { selectedOption, setSelectedOption } = useContext(PlantsContext);

    useEffect(() => {
    axios
      .get(
        `https://perenual.com/api/species-list?page=1&key=${apiKey}&poisonous=${selectedOption.pets}&indoor=${selectedOption.local}&hardiness=${selectedOption.hardiness}&sunlight=${selectedOption.sunlight}`
      )
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      });
  }, [selectedOption]);

  return (
    <ApiContext.Provider value={{ data }}>
      {children}
    </ApiContext.Provider>
  );
};
