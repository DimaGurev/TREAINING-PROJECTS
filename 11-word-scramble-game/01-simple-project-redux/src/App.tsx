// Импорт стилей
import main from "./assets/style/main.module.scss";
import elevation from "./assets/style/elevation.module.scss";
import buttons from "./assets/style/buttons.module.scss";
import "react-toastify/dist/ReactToastify.css";

// Импорт React и его компонентов
import { useEffect, useState } from "react";

// Импорт библиотек и сторонних зависимостей
import { ToastContainer } from "react-toastify";

// Импорт утилит и вспомогательных функций
import { notifyСurrentAnswer, notifyCurrentNotAnswer } from "./utils/notify";

// Импорт констант и перечислений
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { resetTimer, stopTimer, tick } from "./store/timerSlice";
import { regeneration } from "./store/wordsSlice";

function App() {
  const [value, setValue] = useState("");

  const dispatch = useAppDispatch();

  const seconds = useAppSelector((state) => state.timer.time);
  const isRunning = useAppSelector((state) => state.timer.isRunning);

  const wordHint = useAppSelector((state) => state.words.wordHint);
  const shuffle = useAppSelector((state) => state.words.shuffle);

  const checkCurrentAnswer = () => {
    if (
      value.toLocaleLowerCase().trim() === wordHint.word.toLocaleLowerCase()
    ) {
      dispatch(stopTimer());
      notifyСurrentAnswer(wordHint.word);
    } else {
      notifyCurrentNotAnswer();
    }
  };

  const refresh = () => {
    setValue("");
    dispatch(resetTimer());
    dispatch(regeneration());
  };

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => {
        dispatch(tick());
        if (seconds - 1 <= 0) {
          dispatch(stopTimer());
          clearInterval(timer);
          notifyCurrentNotAnswer(wordHint.word);
        }
        if (isRunning) {
          clearInterval(timer);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [seconds]);
  console.log(isRunning);

  return (
    <>
      <ToastContainer />
      <div className={main.center}>
        <div className={`${elevation.LightElevationFifth} box`}>
          <h1>Word Scramble Game</h1>
          <h2>{shuffle}</h2>
          <p>
            Hint: <span>{wordHint.hint}</span>
          </p>
          <p>
            Time Left: <span>{seconds}s</span>
          </p>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Enter a valid word"
          />
          <div className="box-row">
            <button onClick={refresh} className={buttons.FilledButtons}>
              Refresh Word
            </button>
            <button
              onClick={checkCurrentAnswer}
              className={buttons.FilledButtons}
              disabled={!isRunning}
            >
              Check Word
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
