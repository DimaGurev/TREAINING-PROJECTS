// Импорт стилей
import styles from "./App.module.scss";
import typography from "./assets/style/typography.module.scss";
import elevation from "./assets/style/elevation.module.scss";
import buttons from "./assets/style/buttons.module.scss";

// Импорт React
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { increase, dercease, reset } from "./store/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div className={`${elevation.Elevation} ${styles.box}`}>
        <h1 className={typography.DisplayMedium}>Counter</h1>
        <p className={typography.HeadlineLarge}>{count}</p>
        <div className={styles.row}>
          <button
            onClick={() => dispatch(dercease())}
            className={`${buttons.FilledButtons} ${styles.dec}`}
          >
            Decrease
          </button>
          <button
            onClick={() => dispatch(reset())}
            className={`${buttons.FilledButtons} ${styles.reset}`}
          >
            Reset
          </button>
          <button
            onClick={() => dispatch(increase())}
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
