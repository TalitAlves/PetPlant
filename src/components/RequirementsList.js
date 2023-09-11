import React, { useContext, useEffect, useState } from "react";
import { PlantsContext } from "../context/PlantsContext";
import '../styles/PlantsList.css'



function RequirementsList(props) {

   
  const { selectedOption, setSelectedOption } = useContext(PlantsContext);

  const [answers, setAnswers] = useState(
{
  poisonous: null,
      local: null,
      watering: null,
      sunlight: null,
      hardiness: null,
    }
  );

  const handleChangeAnswers = () => {
    setAnswers({
      poisonous:
        selectedOption.poisonous === 1
          ? "For your pet's well-being, a non-toxic plant is best. 🐈💟🐶"
          : "As you don't have pets, more species would be suitable for you! ",
      local:
        selectedOption.local === 0
          ? "Indoor plant 🏠"
          : selectedOption.local === 1
          ? "Outdoor Plant 🪴"
          : "Indoor and outdoor plants 🏠🪴",
      watering:
        selectedOption.watering === "frequent"
          ? "Frequent watering"
          : selectedOption.watering === "average" || "null"
          ? "Average watering"
          : "Minimal watering",
      sunlight:
        selectedOption.sunlight.includes("full_shade")
          ? "Dont need light 🌥️"
          : selectedOption.sunlight.includes("part_shade")
          ? "Dont need much light 🌤️"
          : selectedOption.sunlight.includes("full_sun")
          ? "Needs lot of light ☀️"
          : "Indifferent ☀️☁️",
      hardiness:
        selectedOption.hardiness === "7-13"
          ? "You are a crack and can have any type of plant 😜"
          : selectedOption.hardiness === "1-10"
          ? "You deserve a vote of confidence. Let's put some difficult 🤔"
          : "Let's take easy! 😉",
    });
  };

  useEffect(() => {
    handleChangeAnswers();
  }, []); 
  
   
    return (
    <div className="plants-list">
      <h1>Your perfect plants are here!</h1>

           <div className="requirements-list">
        <h3>Requirements</h3>
        <ul>
          <li><span className="question">Pets: </span><span> {answers.poisonous}</span></li>
          <li><span className="question">Local: </span><span>: {answers.local}</span></li>
          <li><span className="question">Light: </span><span>: {answers.sunlight}</span></li>
          <li><span className="question">Watering: </span><span>: {answers.watering}</span></li>
          <li><span className="question">Hardiness: </span><span>: {answers.hardiness}</span></li>
        </ul>
        
      </div>

      <div>
        Response: {props.response}
      </div>
    </div>
  );
}

export default RequirementsList;
