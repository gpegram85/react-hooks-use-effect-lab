import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect( () => {
    setTimeRemaining(10)
      const timeout = setTimeout( () => {
        const interval = setInterval( () => {
          setTimeRemaining(timeRemaining => {
            if (timeRemaining > 1) {
              return timeRemaining - 1
            } else {
              onAnswered(false)
              clearInterval(interval)
              return 10
            }
          })
        }, 1000)

          return () => clearInterval(interval)
        }, 0)

          return () => clearTimeout(timeout)
        }, [onAnswered])

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    setTimeout(() => onAnswered(isCorrect), 0)
  }

  const { id, prompt, answers, correctIndex } = question

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        )
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
