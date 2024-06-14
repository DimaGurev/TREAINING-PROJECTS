// Импорт стилей
import main from "./assets/style/main.module.scss";
import elevation from "./assets/style/elevation.module.scss";
import typography from "./assets/style/typography.module.scss";

// Импорт React и его компонентов
import { useState } from "react";

interface Statistics {
  chars: number;
  words: number;
  spaces: number;
  letters: number;
}

function countSpaces(str: string) {
  const spacesArray = str.match(/ /g);
  return spacesArray ? spacesArray.length : 0;
}

function App() {
  const [text, setText] = useState<string>("");

  const [statistics, setStatistics] = useState<Statistics>({
    chars: 0,
    words: 0,
    spaces: 0,
    letters: 0,
  });

  const handlerText = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const value = e.target.value;
    setText(value);

    const arr = value.split(" ");

    const arrFilterWord = arr.filter((i) => (i === "" ? false : true));

    setStatistics({
      chars: value.length,
      words: arrFilterWord.length,
      spaces: countSpaces(value),
      letters: arrFilterWord.join("").length,
    });
  };

  return (
    <>
      <div className={main.center}>
        <div className={elevation.LightElevationFifth}>
          <h1 className={typography.HeadlineLarge}>Characters Counter</h1>
          <textarea onChange={handlerText} value={text}></textarea>
          <div className={`${main.row} row`}>
            <div>
              Chars: <span>{statistics.chars}</span>
            </div>
            <div>
              Words: <span>{statistics.words}</span>
            </div>
            <div>
              Spaces: <span>{statistics.spaces}</span>
            </div>
            <div>
              Letters: <span>{statistics.letters}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
