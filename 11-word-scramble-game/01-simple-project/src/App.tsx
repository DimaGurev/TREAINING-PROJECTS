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
import { getRandomNumber } from "./utils/random";

// Импорт констант и перечислений
import mock from "./mock";
import { shuffleWord } from "./utils/shuffle";

import { notifyСurrentAnswer, notifyCurrentNotAnswer } from "./utils/notify";

function App() {
  const defaultSeconds = 30;
  const [value, setValue] = useState("");
  const [seconds, setSeconds] = useState(defaultSeconds);
  const [timeIsOver, setTimeIsOver] = useState(false);

  const [words] = useState<{ word: string; hint: string }[]>(mock);

  const getWordHint = () => {
    return words[getRandomNumber(0, words.length)];
  };

  const [wordHint, setWordHint] = useState(getWordHint());
  const [shuffle, setShuffle] = useState(shuffleWord(wordHint.word));

  const checkCurrentAnswer = () => {
    if (
      value.toLocaleLowerCase().trim() === wordHint.word.toLocaleLowerCase()
    ) {
      setTimeIsOver(true);
      notifyСurrentAnswer(wordHint.word);
    } else {
      notifyCurrentNotAnswer();
    }
  };

  const refresh = () => {
    setValue("");
    setSeconds(defaultSeconds);
    setTimeIsOver(false);
    const words = getWordHint();
    setWordHint(words);
    setShuffle(shuffleWord(words.word));
  };

  useEffect(() => {
    let timer: number;
    if (!timeIsOver) {
      timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
        if (seconds - 1 <= 0) {
          setTimeIsOver(true);
        }
      }, 100);
    }

    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <>
      <ToastContainer />
      <div className={main.center}>
        <div className={`${elevation.LightElevationFifth} box`}>
          <h1>Word Scramble Game</h1>
          <h2>
            {shuffle} {wordHint.word}
          </h2>
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
              disabled={timeIsOver}
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
