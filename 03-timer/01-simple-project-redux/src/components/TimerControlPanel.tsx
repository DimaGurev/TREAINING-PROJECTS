// Импорт стилей
import elevation from "./../assets/style/elevation.module.scss";
import buttons from "./../assets/style/buttons.module.scss";

// Импорт пропсов и хуков React
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeStatus as setStatus } from "./../store/timerSlice";

import playBeep from "../utils/playBeep";
import convertSecondsToTime from "../utils/convertSecondsToTime";
import { changeMinutes } from "../store/minutesSlice";
import { RootState } from "../store/store";

const TimerControlPanel: React.FC = () => {
  const minutes = useSelector((state: RootState) => state.minutes.value);
  const dispatch = useDispatch();

  const initialSeconds = (+minutes || 0) * 60;
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let time: number;

    if (isRunning && seconds > 0) {
      time = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 1) {
            clearInterval(time);
            playBeep();
            setIsRunning(false);
            return initialSeconds;
          }
          return prevSeconds - 1;
        });
      }, 100);
    }

    return () => clearInterval(time);
  }, [isRunning, seconds]);

  const toggleTimer = (): void => setIsRunning((prev) => !prev);

  const changeStatus = (): void => {
    dispatch(setStatus(minutes));
    dispatch(changeMinutes(undefined));
  };

  return (
    <div className={elevation.LightElevationFifth} style={{ width: "400px" }}>
      <h2>Timer</h2>
      <h2>{convertSecondsToTime(seconds)}</h2>
      <button
        onClick={toggleTimer}
        className={buttons.FilledButtons}
        style={{ width: "100%" }}
      >
        Start/Pause
      </button>
      <button
        onClick={changeStatus}
        className={buttons.FilledButtons}
        style={{ width: "100%", marginTop: "20px" }}
      >
        Reset Timer
      </button>
    </div>
  );
};

export default TimerControlPanel;
