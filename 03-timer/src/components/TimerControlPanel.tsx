import elevation from "./../assets/style/elevation.module.scss";
import buttons from "./../assets/style/buttons.module.scss";
import { Props } from "../App";
import { useEffect, useState } from "react";

const playBeep = () => {
  const audioCtx = new (window.AudioContext || window.AudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
  oscillator.start();

  gainNode.gain.setValueAtTime(2, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.00002, audioCtx.currentTime + 3);

  oscillator.stop(audioCtx.currentTime + 1);
};

const TimerControlPanel: React.FC<Props> = ({ minuts, setMinuts, setStatus }) => {
  const initialSeconds = (minuts ?? 0) * 60;
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let time: number;

    if (isRunning && seconds > 0) {
      time = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 0) {
            clearInterval(time);
            playBeep();
            setIsRunning(false);
            return initialSeconds;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }

    return () => clearInterval(time);
  }, [isRunning]);

  const changeStatus = () => {
    setStatus("input");
    setMinuts(undefined);
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
      <button onClick={() => setIsRunning((prev) => !prev)} className={buttons.FilledButtons} style={{ width: "100%" }}>
        Start/Pause
      </button>
      <button onClick={changeStatus} className={buttons.FilledButtons} style={{ width: "100%", marginTop: "20px" }}>
        Reset Timer
      </button>
    </div>
  );
};

export default TimerControlPanel;
