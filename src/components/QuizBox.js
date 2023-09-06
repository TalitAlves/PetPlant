import React from "react";
import "../styles/QuizBox.css";

function QuizBox(props) {
  
 
  
  const quizBoxStyle = {
    backgroundColorTitle: props.backgroundColorTitle,
    backgroundColorInfo: props.backgroundColorInfo,
  };

  return (
    <div className="quizz-box">
      <div
        className="box-title"
        style={{ backgroundColor: quizBoxStyle.backgroundColorTitle }}
      >
        <h2>{props.title}</h2>
      </div>
      <div
        className="box-info"
        style={{ backgroundColor: quizBoxStyle.backgroundColorInfo }}
      >
        <div>{props.question}</div>
        <div className="box-answer">
          <div>
            <input
              type="checkbox"
              value={props.value}
              name={props.name}
              checked={props.selectedOption === props.answer1}
              onChange={() => props.onChange(props.answer1)}
            />
            {props.answer1}
          </div>
          <div>
          <input
              type="checkbox"
              value={props.value}
              name={props.name}
              checked={props.selectedOption === props.answer2}
              onChange={() => props.onChange(props.answer2)}
            />
            {props.answer2}
          </div>
          {props.answer3 && (
            <div>
              <input type="checkbox" value={props.value} name={props.name} />
              {props.answer3}
            </div>
          )}
          {props.answer4 && (
            <div>
              <input type="checkbox" value={props.value} name={props.name} />
              {props.answer4}
            </div>
          )}
        </div>
        <img src={props.img} alt={props.alt} />
      </div>
    </div>
  );
}

export default QuizBox;
