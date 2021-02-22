import React, { useState } from "react";
import "./question.css";

const Question = ({ question, onNextClicked }) => {
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState({});

  const onOptionClicked = (option) => {
    setAnswered(true);
    setSelectedOption(option);
  };

  const isCorrect = (option) => {
    return option === question.answer;
  };

  const resetQuestion = () => {
    setAnswered(false);
    setSelectedOption({});
    onNextClicked(selectedOption);
  };

  return (
    <div className="question">
      <div className="question-image-holder">
        <img
          className="question-image"
          // src={question.image ? question.image.downloadUrl : ""}
          src="https://media0.giphy.com/media/3oz8xD8KOjTwxGG1q0/200w.webp?cid=ecf05e47gf71lmmm06bdvmuot61k711b1mdp2gwomd43tm9g&rid=200w.webp"
          alt={question}
        />
      </div>
      <section>
        <div className="question-text-holder">
          {answered && <button onClick={resetQuestion}>Next</button>}
          <h4 className="question-text">{question.question}</h4>
        </div>

        {question.options.map((option, index) => {
          return (
            <button
              key={index}
              onClick={() => onOptionClicked(option)}
              disabled={answered && !isCorrect(option)}
              className={`question-option ${
                answered && isCorrect(option) && "correct"
              }
              ${selectedOption === option && !isCorrect(option) && "wrong"}
              `}
            >
              <span>
                {answered ? (isCorrect(option) ? "✔" : "X") : index + 1}
              </span>
              {option}
            </button>
          );
        })}
      </section>
    </div>
  );
};

export default Question;
