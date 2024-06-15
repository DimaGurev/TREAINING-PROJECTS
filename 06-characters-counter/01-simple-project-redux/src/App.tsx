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

import { useSelector, useDispatch } from "react-redux";
import { getStatistic } from "./store/statisticsSlice";
import { RootState } from "./store/store";

function App() {
  const statistics = useSelector((state: RootState) => state.statistics);
  const dispatch = useDispatch();

  const handlerText = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    dispatch(getStatistic(e.target.value));
  };

  return (
    <>
      <div className={main.center}>
        <div className={elevation.LightElevationFifth}>
          <h1 className={typography.HeadlineLarge}>Characters Counter</h1>
          <textarea onChange={handlerText} value={statistics.value}></textarea>
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
