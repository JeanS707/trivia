import React, { useState } from "react";
import data from "../sample_data.json";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerDisplayed, setAnswerDisplayed] = useState(false);
  // we need 2 state variables
  const correctAnswerIndex =
    data[currentQuestion].question.correct_choice_index;

  function revealCorrectAnswer() {
    // Now we know user clicked right answer button
    setAnswerDisplayed(true);
  }

  return (
    <div className="app">
      Trivia!
      <Question
        question={data[currentQuestion].question.text}
        num={currentQuestion}
      />
      <CorrectAnswer answer={revealCorrectAnswer} />
      {answerDisplayed ? (
        <div>
          Correct Answer:{" "}
          {data[currentQuestion].question.choices[correctAnswerIndex]}
        </div>
      ) : (
        ""
      )}
      <NextQuestion NextQuestion="Next Question here" />
    </div>
  );
}

// {
//   "question": {
//     "choices": ["48", "13", "52", "50"],
//     "correct_choice_index": 3,
//     "text": "How many states are in the United States?",
//     "user_id": "ZbCvDadaM0SD9YjAXrHMEDLVGoj2"
//   }
// }

function Question(props) {
  return (
    <div className="Questions">
      {props.question}
      <div>
        <Answer answer={data[props.num].question.choices} />
      </div>
    </div>
  );
}
function Answer(props) {
  return (
    <div className="container">
      {props.answer.map((currentAnswer) => (
        <button className="button">{currentAnswer}</button>
      ))}
    </div>
  );
}

function CorrectAnswer(props) {
  return (
    <div className="canswers">
      {props.correctAnswer}
      <button
        onClick={() => {
          props.answer();
        }}
        className="RightAnswer"
      >
        Click for the Right Answer
      </button>
    </div>
  );
}
function Bingo() {
  if (Answer() === CorrectAnswer()) {
    console.log("you got the right answer!");
  } else {
    console.log("oops better luck next time!");
  }
  return;
}
function NextQuestion(props) {
  return <button className="NextQuestions">{props.NextQuestion}</button>;
}

export default App;
