  // Импорт React и его компонентов
import { useState } from "react";

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [userName, setUsetName] = useState("");
  const [value, setValue] = useState("");
  const [answerOptions, setAnswerOptions] = useState<number[]>([]);
  const [randomNumber] = useState(getRandomNumber(0, 100));
  const [gameIsClosed, setGameIsClosed] = useState(false);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userName) {
      setUsetName(value);
    }
    if (userName) { 
      setAnswerOptions((prev) => [...prev, +value]);
    }
    if (userName && +value === randomNumber) {
      setGameIsClosed(true);
    }
    setValue("");
  };

  return (
    <>
      <h1>🎲 Guess Number {randomNumber}</h1>
      {userName && (
        <p>
          😄 {userName}, there is a number between 0 and 100. Try to guess it in
          the fewest number of tries. After each attempt, there will be a
          message with the text - 'Few', 'Many' or 'Right'.'
        </p>
      )}
      {answerOptions.map((item, index) => (
        <div key={index}>
          <p>➡️ {item}</p>

          {item !== randomNumber && (
            <>
              {item < randomNumber ? (
                <p>⬆️️ Few. Try again 😸</p>
              ) : (
                <p>⬆️️ Many. Try again 😸</p>
              )}
            </>
          )}
        </div>
      ))}

      {gameIsClosed && (
        <>
          <hr />
          <p>🎊 Right. The number you've guessed: {randomNumber}</p>
          <p>🎉 Number of attempts: {answerOptions.length}</p>
          <button onClick={() => window.location.reload()}>Play again?</button>
        </>
      )}
      {!gameIsClosed && (
        <form onSubmit={submitForm}>
          <input
            max={100}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type={userName ? "number" : "text"}
            placeholder={userName ? "Enter number" : "👋 Enter your name"}
          />
        </form>
      )}
    </>
  );
}

export default App;
