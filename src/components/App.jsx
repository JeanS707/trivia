import React, { useState } from "react";
import data from "../sample_data.json";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // we need 2 state variables
  return (
    <div className="app">
      Trivia!
      <Question
        question={data[currentQuestion].question.text}
        num={currentQuestion}
      />
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
    <div className="Answers">
      {props.answer.map((currentAnswer) => (
        <div>{currentAnswer}</div>
      ))}
    </div>
  );
}

function NextQuestion(props) {
  return <button className="NextQuestions">{props.NextQuestion}</button>;
}

export default App;
