// Импорт стилей
import styles from "./App.module.scss";
import typography from "./assets/style/typography.module.scss";
import elevation from "./assets/style/elevation.module.scss";
import buttons from "./assets/style/buttons.module.scss";

// Импорт React
import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  const dercease = () => {
    setCount((prev) => prev - 1);
  };
  const increase = () => {
    setCount((prev) => prev + 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className={`${elevation.Elevation} ${styles.box}`}>
        <h1 className={typography.DisplayMedium}>Counter</h1>
        <p className={typography.HeadlineLarge}>{count}</p>
        <div className={styles.row}>
          <button
            onClick={dercease}
            className={`${buttons.FilledButtons} ${styles.dec}`}
          >
            Decrease
          </button>
          <button
            onClick={reset}
            className={`${buttons.FilledButtons} ${styles.reset}`}
          >
            Reset
          </button>
          <button
            onClick={increase}
            className={`${buttons.FilledButtons} ${styles.inc}`}
          >
            Increase
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
