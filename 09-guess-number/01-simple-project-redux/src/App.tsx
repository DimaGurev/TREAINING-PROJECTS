// Импорт React и его компонентов
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
  addAnswerOptions,
  finishGame,
  selectAnswerOptionsLength as length,
  setUserName,
} from "./store/gameSlice";
import { useSelector } from "react-redux";

import buttons from "./assets/style/buttons.module.scss";

function App() {
  const [value, setValue] = useState("");

  const dispatch = useAppDispatch();

  const userName = useAppSelector((state) => state.game.userName);
  const answerOptions = useAppSelector((state) => state.game.answerOptions);
  const randomNumber = useAppSelector((state) => state.game.randomNumber);
  const gameIsClosed = useAppSelector((state) => state.game.gameIsClosed);

  const selectAnswerOptionsLength = useSelector(length);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userName) {
      dispatch(setUserName(value));
    }
    if (userName) {
      dispatch(addAnswerOptions(+value));
    }
    if (userName && +value === randomNumber) {
      dispatch(finishGame());
    }
    setValue("");
  };

  return (
    <>
      <h1>🎲 Guess Number</h1>
      {userName && (
        <p>
          😄 {userName}, there is a number between 0 and 1000. Try to guess it in
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
          <p>🎉 Number of attempts: {selectAnswerOptionsLength}</p>
          <button
            className={buttons.FilledButtons}
            onClick={() => window.location.reload()}
          >
            Play again?
          </button>
        </>
      )}
      {!gameIsClosed && (
        <form onSubmit={submitForm}>
          <input
            max={1000}
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
