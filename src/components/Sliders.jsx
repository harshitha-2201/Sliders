import React, { useState } from "react";
import "./sliders.css";

const questions = [
  "I have ambitious aims of making a difference.",
  "I enjoy solving complex problems.",
  "I am committed to my goals.",
  "I’m beginning to believe the journey of service will be much harder than I anticipated",
  "I question whether I can remain effective in my role long-term.",
];

const Sliders = () => {
  const [progress, setProgress] = useState([5, 0]); // Initial progress for each bar (5%)
  const [buttonClicked, setButtonClicked] = useState(null); // State to track button click
  const [currentQuestion, setCurrentQuestion] = useState(0); // State to track the current question

  const moveForward = (index) => {
    // Find the first bar that is not full yet
    const barIndex = progress.findIndex((p) => p < 100);
    if (barIndex !== -1) {
      // Increment the progress of the first unfilled bar by 80%
      const updatedProgress = [...progress];
      updatedProgress[barIndex] += 20;
      setProgress(updatedProgress);
      setButtonClicked(index);
      setTimeout(() => {
        setButtonClicked(null);
      }, 500);

      // Move to the next question
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
  
      const barIndex = currentQuestion - 1;
  
      const updatedProgress = [...progress];
      updatedProgress[barIndex] -= 80;
  
      // Set the updated progress
      setProgress(updatedProgress);
    }
  };
  

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="main-cotainer">
      <div className="tag-container">
        <div className="progress-bars-container">
          {progress.map((p, index) => (
            <div key={index} className="progress-bar">
              <div
                className="progress-segment"
                style={{ width: `${p}%` }}
              ></div>
            </div>
          ))}
        </div>
        <ul>
          <li>IDEALISTIC</li>
          <li>DISILLUSIONED</li>
        </ul>
      </div>
      <div className="random-choices">
        <h1>
          {currentQuestion + 1}/{questions.length}
        </h1>
        <p>{questions[currentQuestion]}</p>
      </div>

      <div className="button-container">
        <div className="buttons-line ">
          <div className="button-wrapper">
            <button
              onClick={() => moveForward(0)}
              className={buttonClicked === 0 ? "clicked" : ""}
            ></button>
            <span>Strongly Disagree</span>
          </div>
          <div className="button-wrapper">
            <button
              onClick={() => moveForward(1)}
              className={buttonClicked === 1 ? "clicked" : ""}
            ></button>
            <span>Disagree</span>
          </div>
          <div className="button-wrapper">
            <button
              onClick={() => moveForward(2)}
              className={buttonClicked === 2 ? "clicked" : ""}
            ></button>
            <span>Netural</span>
          </div>        <div className="button-wrapper">
            <button
              onClick={() => moveForward(2)}
              className={buttonClicked === 2 ? "clicked" : ""}
            ></button>
            <span>Agree</span>
          </div>
          <div className="button-wrapper">
            <button
              onClick={() => moveForward(3)}
              className={buttonClicked === 3 ? "clicked" : ""}
            ></button>
            <span>Strong Agree</span>
          </div>
        </div>
      </div>

      <div className="btns">
        <button onClick={handlePrevious} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentQuestion === questions.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Sliders;
