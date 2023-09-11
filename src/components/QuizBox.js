import React, { useState } from "react";
import "../styles/QuizBox.css";


function QuizBox(props) {
  const quizBoxStyle = {
    backgroundColorTitle: props.backgroundColorTitle,
    backgroundColorInfo: props.backgroundColorInfo,
  };
  const [isChecked, setIsChecked] = useState(false);
 

  const handleCheckBox = (value) => {
    const { question, onOptionChange } = props;
    onOptionChange(value, question);
    setIsChecked(value);
       
  };

  return (
    <div className="quiz-box"
    style={{ backgroundColor: quizBoxStyle.backgroundColorInfo }}>
      <div
        className="box-title"
        style={{ backgroundColor: quizBoxStyle.backgroundColorTitle }}
      >
        <h2>{props.title}</h2>
      </div>
      <img className='quiz-img' src={props.img} alt={props.title} />
      <div
        className="box-info"
        
      >
        <div className="question">{props.question}</div>
        <div className="box-checkbox-option">
          <div>
            <input
              type="checkbox"
              value={props.value1}
              name={props.title}
              checked={isChecked === props.value1}
              onChange={()=>handleCheckBox(props.value1)}
              
            />
            {props.answer1}
         
          </div>
          <div>
            <input type="checkbox"
              value={props.value2}
              name={props.title}
              checked={isChecked === props.value2}
              onChange={()=>handleCheckBox(props.value2)} />
            {props.answer2}
        
          </div>
          {props.answer3 && (
            <div>
              <input type="checkbox"
              value={props.value3}
              name={props.name}
              checked={isChecked === props.value3}
              onChange={()=>handleCheckBox(props.value3)}/>
              {props.answer3}
           
            </div>
          )}
          {props.answer4 && (
            <div>
              <input type="checkbox"
              value={props.value4}
              name={props.name}
              checked={isChecked === props.value4}
              onChange={()=>handleCheckBox(props.value4)} />
              {props.answer4}
             
            </div>
          )}
        </div>
       
      </div>
    </div>
  );
}

export default QuizBox;
