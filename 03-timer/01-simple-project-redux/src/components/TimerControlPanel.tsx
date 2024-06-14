// Импорт стилей
import elevation from "./../assets/style/elevation.module.scss";
import buttons from "./../assets/style/buttons.module.scss";

// Импорт пропсов и хуков React
import { Props } from "../App";
import { useEffect, useState } from "react";

const audioCtx = new (window.AudioContext || window.AudioContext)();

const playBeep = () => {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
  oscillator.start();

  gainNode.gain.setValueAtTime(1, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 1);

  oscillator.stop(audioCtx.currentTime + 1);
};

const TimerControlPanel: React.FC<Props> = ({
  minutes,
  setMinutes,
  setTimerStatus,
}) => {
  const initialSeconds = (minutes ?? 0) * 60;
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
    setTimerStatus("input");
    setMinutes(undefined);
  };

  const convertSecondsToTime = (seconds: number): string => {
    const minutes: number = Math.floor(seconds / 60);
    const remainingSeconds: number = seconds % 60;
    const formattedMinutes: string = String(minutes).padStart(2, "0");
    const formattedSeconds: string = String(remainingSeconds).padStart(2, "0");
    return `${formattedMinutes} : ${formattedSeconds}`;
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
