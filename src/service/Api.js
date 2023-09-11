import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { PlantsContext } from "../context/PlantsContext";
import RequirementsList from "../components/RequirementsList";

function Api() {
  const apiKey = "sk-8UXs64f86f09589372089";
  const [data, setData] = useState([]);
  const [details, setDetails] = useState([]);

  const {selectedOption, setSelectedOption} = useContext(PlantsContext)

  useEffect(() => {
    axios
      .get(
        `https://perenual.com/api/species/details/940?key=${apiKey}`
      )
      .then((response) => {
        console.log(response.data);
        setDetails(response.data);
      });
  }, []);

  useEffect(()=>{
      axios.get(`https://perenual.com/api/species-list?page=1&key=${apiKey}&poisonous=${selectedOption.pets}&indoor=${selectedOption.local}&hardiness=${selectedOption.hardiness}&sunlight=${selectedOption.sunlight}`)
      .then((response)=>{
          console.log(response.data.data[0])
          setData(response.data.data)
      })
  },[selectedOption])

  return (
  <div>
     Response: {data[0] ? setData[0].cycle : "..."}
  </div>)
}

export default Api;
