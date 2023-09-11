import React, { useContext, useState } from "react";
import QuizBox from "./QuizBox";
import "../styles/Home.css";
import poisonous from "../imgs/CatsAndPlantsArt1.jpg";
import watering from "../imgs/watering.jpg";
import sunlight from "../imgs/sunlight.jpg";
import local from "../imgs/local.jpg";
import hardiness from "../imgs/hardness.jpg";
import { Link } from "react-router-dom";
import { PlantsContext } from "../context/PlantsContext";

function Home() {
  const { selectedOption, setSelectedOption } = useContext(PlantsContext);

  const handleOptionChange = (question, value) => {
    setSelectedOption({ ...selectedOption, [question]: value });
  };

  const handleSubmit = () => {
    handleOptionChange();
    console.log(selectedOption);
  };
  
  return (
    <div className="container">
      <h1>Which is PERFERCT plant for you?</h1>
      <div className="quiz">
        <QuizBox
          backgroundColorTitle={"#0d99ff"}
          backgroundColorInfo={"#bde3ff"}
          title={"PETS"}
          question={"Do you have cats or dogs that might chew on the plant?"}
          answer1={"No cats or dogs here!"}
          answer2={"Yes, my cat/dog might chew on my plant"}
          value1={0}
          value2={1}
          img={poisonous}
          selectedOption={selectedOption["poisonous"]}
          onOptionChange={(value) => handleOptionChange("poisonous", value)}
        />

        <QuizBox
          title={"WATERING"}
          backgroundColorTitle={"#ffa629"}
          backgroundColorInfo={"#fcd19c"}
          question={"How often will you remember to water your houseplant?"}
          answer1={"I'll water it every day, if that's what it needs"}
          answer2={"I'll probably remember to water once a week"}
          answer3={"Errr... I'm kinda forgetful about watering"}
          value1={"frequent"}
          value2={"average"}
          value3={"minimum"}
          img={watering}
          selectedOption={selectedOption["watering"]}
          onOptionChange={(value) => handleOptionChange("watering", value)}
        />

        <QuizBox
          title={"LOCAL"}
          backgroundColorTitle={"#ff6543"}
          backgroundColorInfo={"#ffc7c2"}
          question={"Do you know where you will put your plant?"}
          answer1={"Indoor"}
          answer2={"Outdoor"}
          answer3={"Whatever"}
          value1={0}
          value2={1}
          value3={null}
          img={local}
          selectedOption={selectedOption["local"]}
          onOptionChange={(value) => {
            handleOptionChange("local", value);
          }}
        />

        <QuizBox
          title={"SUNLIGHT"}
          backgroundColorTitle={"#9747ff"}
          backgroundColorInfo={"#e4ccff"}
          question={"What kind of sunlight can you give this plant?"}
          answer1={"I want a plant for a dark room or my office"}
          answer2={"My plant spot is bright, but doesn't get direct sun"}
          answer3={"I have a really sunny spot for my new plant"}
          answer4={
            "I've no idea where it will go, but I have sunny and not-so-sunny windows"
          }
          value1={"full_shade"}
          value2={"part_shade"}
          value3={"full_sun"}
          value4={null}
          img={sunlight}
          selectedOption={selectedOption["sunlight"]}
          onOptionChange={(value) => handleOptionChange("sunlight", value)}
        />

        <QuizBox
          title={"HARDINESS"}
          backgroundColorTitle={"#14ae5c"}
          backgroundColorInfo={"#aff4c6"}
          question={"Personal question time... have you killed a plant before?"}
          answer1={"Nope, all my plants are doing great!"}
          answer2={
            "I've killed a couple, but I'm determined to keep this one alive"
          }
          answer3={"I'm a recovering plant serial-killer!"}
          answer4={"This will be my first houseplant!"}
          value1={"7-13"}
          value2={"1-10"}
          value3={"1-5"}
          value4={"1-7"}
          img={hardiness}
          selectedOption={selectedOption["hardiness"]}
          onOptionChange={(value) => handleOptionChange("hardiness", value)}
        />
      </div>

      <Link
        to={"/RequirementsList"}>
        <button
          onClick={() => {
            handleSubmit();
            
          }}
        >
          See your perfect plants option
        </button>
      </Link>
    </div>
  );
}
export default Home;
