import React, { useState } from "react";
import QuizBox from "./QuizBox";
import "../styles/Home.css";

function Home() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleCheckboxChange = (newOption) => {
      setSelectedOption(newOption);
    };
  return (
    <div>
      <h1>Which is PERFERCT plant for you?</h1>
      <div className="quizz">
        <QuizBox
          backgroundColorTitle={"#0d99ff"}
          backgroundColorInfo ={"#bde3ff"}
          title={"Poisonous"}
          question={"Do you have cats or dogs that might chew on the plant?"}
          answer1={"No cats or dogs here!"}
          answer2={"Yes, my cat/dog might chew on my plant"}
          selectedOption={selectedOption}
          onChange={handleCheckboxChange}
        />

        <QuizBox
          title={"Watering"}
          backgroundColorTitle={"#ffa629"}
          backgroundColorInfo ={"#fcd19c"}
          question={"How often will you remember to water your houseplant?"}
          answer1={"I'll probably remember to water once a week"}
          answer2={"I'll water it every day, if that's what it needs"}
          answer3={"Errr... I'm kinda forgetful about watering"}
        />

        <QuizBox
          title={"Local"}
          backgroundColorTitle={"#ff6543"}
          backgroundColorInfo ={"#ffc7c2"}
          question={"Do you know where you will put your plant?"}
          answer1={"Indoor"}
          answer2={"Outdoor"}
        />

        <QuizBox
          title={"Sunlight"}
          backgroundColorTitle={"#9747ff"}
          backgroundColorInfo ={"#e4ccff"}
          question={"What kind of sunlight can you give this plant?"}
          answer1={"I want a plant for a dark room or my office"}
          answer2={"My plant spot is bright, but doesn't get direct sun"}
        />

        <QuizBox
          title={"Hardiness"}
          backgroundColorTitle={"#14ae5c"}
          backgroundColorInfo ={"#aff4c6"}
          question={"Personal question time... have you killed a plant before?"}
          answer1={"Nope, all my plants are doing great!"}
          answer2={
            "I've killed a couple, but I'm determined to keep this one alive"
          }
          answer3={"I'm a recovering plant serial-killer!"}
          answer4={"This will be my first houseplant!"}
        />
      </div>
    </div>
  );
}
export default Home;
