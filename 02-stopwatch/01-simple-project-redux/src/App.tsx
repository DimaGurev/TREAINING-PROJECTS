import styles from "./App.module.scss";
import typography from "./assets/style/typography.module.scss";
import elevation from "./assets/style/elevation.module.scss";
import buttons from "./assets/style/buttons.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  startTimer,
  stopTimer,
  resetTimer,
  selectSeconds,
  selectIsIsButtonStartDisabled,
  selectIsIsButtonPauseDisabled,
} from "./store/stopwatchSlice";
import { AppDispatch } from "./store/store";

function App(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const seconds = useSelector(selectSeconds);
  const isButtonStartDisabled = useSelector(selectIsIsButtonStartDisabled);
  const isButtonPauseDisabled = useSelector(selectIsIsButtonPauseDisabled);

  const convertSecondsToTime = (seconds: number): string => {
    const minutes: number = Math.floor(seconds / 60);
    const remainingSeconds: number = seconds % 60;
    const formattedMinutes: string = String(minutes).padStart(2, "0");
    const formattedSeconds: string = String(remainingSeconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <>
      <div className={`${elevation.LightElevationFifth} ${styles.box}`}>
        <h1 className={typography.DisplayMedium}>StopWatch</h1>
        <p className={typography.HeadlineLarge}>
          {convertSecondsToTime(seconds)}
        </p>
        <div className={styles.row}>
          <button
            onClick={() => dispatch(startTimer())}
            className={`${buttons.FilledButtons} ${styles.start}`}
            disabled={isButtonStartDisabled ? true : false}
          >
            Start
          </button>
          <button
            onClick={() => dispatch(stopTimer())}
            className={`${buttons.FilledButtons} ${styles.pause}`}
            disabled={isButtonPauseDisabled ? true : false}
          >
            Pause
          </button>
          <button
            onClick={() => dispatch(resetTimer())}
            className={`${buttons.FilledButtons} ${styles.reset}`}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
