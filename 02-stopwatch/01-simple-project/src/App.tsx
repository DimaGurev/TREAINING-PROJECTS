import styles from "./App.module.scss";
import typography from "./assets/style/typography.module.scss";
import elevation from "./assets/style/elevation.module.scss";
import buttons from "./assets/style/buttons.module.scss";
import { useEffect, useState } from "react";

function App(): JSX.Element {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isButtonStartDisabled, setIsButtonStartDisabled] =
    useState<boolean>(false);
  const [isButtonPauseDisabled, setIsButtonPauseDisabled] =
    useState<boolean>(false);

  useEffect(() => {
    let intervalId: number;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const start = (): void => {
    if (!isButtonStartDisabled) {
      setIsRunning((prev) => !prev);
      setIsButtonStartDisabled(true);
      setIsButtonPauseDisabled(false);
    }
  };
  const pause = (): void => {
    if (!isButtonPauseDisabled) {
      setIsRunning(false);
      setIsButtonPauseDisabled(true);
      setIsButtonStartDisabled(false);
    }
  };
  const reset = (): void => {
    setIsRunning(false);
    setSeconds(0);
    setIsButtonPauseDisabled(false);
    setIsButtonStartDisabled(false);
  };
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
            onClick={start}
            className={`${buttons.FilledButtons} ${styles.start}`}
            disabled={isButtonStartDisabled ? true : false}
          >
            Start
          </button>
          <button
            onClick={pause}
            className={`${buttons.FilledButtons} ${styles.pause}`}
            disabled={isButtonPauseDisabled ? true : false}
          >
            Pause
          </button>
          <button
            onClick={reset}
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
