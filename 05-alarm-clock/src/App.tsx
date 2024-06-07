// Импорт стилей
import main from "./assets/style/main.module.scss";
import elevation from "./assets/style/elevation.module.scss";
import typography from "./assets/style/typography.module.scss";
import buttons from "./assets/style/buttons.module.scss";

// Импорт React и его компонентов
import { useEffect, useState } from "react";
// Импорт компонентов приложения
import Select from "./components/Select";

// Импорт библиотек и сторонних зависимостей

// Импорт типов и интерфейсов

// Импорт утилит и вспомогательных функций

// Импорт констант и перечислений

// Импорт изображений, шрифтов и других ресурсов
import { LuAlarmClock } from "react-icons/lu";
import mp3 from "/sounds/ringtone.mp3";

const audio = new Audio(mp3);

const options = {
  hours: Array.from({ length: 12 }, (_, i) => `${++i}`),
  minutes: Array.from({ length: 60 }, (_, i) => `${++i}`),
  ampm: ["AM", "PM"],
};

const App: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  const [isSetTime, setIsSetTime] = useState<boolean>(false);
  const [isTimerFinished, setIsTimerFinished] = useState<boolean>(false);

  const [selectHours, setSelectHours] = useState<string>("");
  const [selectMinutes, setSelectMinutes] = useState<string>("");
  const [selectAMPM, setselectAMPM] = useState<string>("");

  const hours: number = currentTime.getHours();
  const minutes: number = currentTime.getMinutes();
  const seconds: number = currentTime.getSeconds();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      if (
        isSetTime &&
        selectHours &&
        selectMinutes &&
        selectAMPM &&
        selectHours === `${selectAMPM === "PM" ? hours - 12 : hours}` &&
        selectMinutes === `${minutes}` &&
        seconds === 0
      ) {
        handlePlay();
        setIsTimerFinished(true);
      }

      clearInterval(interval);
    };
  }, [currentTime]);

  const handlePlay = () => {
    audio.play();
    audio.loop = true;
  };
  const handleReset = () => {
    audio.pause();
    audio.currentTime = 0;
    setSelectHours("");
    setSelectMinutes("");
    setselectAMPM("");
  };

  const checkTime = () => {
    if (selectHours && selectMinutes && selectAMPM) {
      setIsSetTime((prev) => !prev);
    }
    if (isTimerFinished) {
      handleReset();
    }
  };

  return (
    <>
      <div className={main.center} style={{ width: "400px" }}>
        <div
          className={elevation.LightElevationFirst}
          style={{ width: "400px", textAlign: "center" }}
        >
          <h1 className={typography.HeadlineMedium}>Alarm Clock</h1>
          <LuAlarmClock fontSize={"50px"} />
          <p className={typography.HeadlineLarge}>
            {hours > 12 ? hours - 12 : hours}:{minutes}:{seconds}{" "}
            {hours > 12 ? "PM" : "AM"}
          </p>
          <div className={main.row}>
            <Select
              isSetTime={isSetTime}
              select={selectHours}
              onChange={setSelectHours}
              options={options.hours}
              placeholder="Hour"
            />
            <Select
              isSetTime={isSetTime}
              select={selectMinutes}
              onChange={setSelectMinutes}
              options={options.minutes}
              placeholder="Minute"
            />
            <Select
              isSetTime={isSetTime}
              select={selectAMPM}
              onChange={setselectAMPM}
              options={options.ampm}
              placeholder="AM/PM"
            />
          </div>
          <button
            onClick={checkTime}
            className={buttons.FilledButtons}
            style={{ width: "100%", marginTop: "20px" }}
          >
            {isSetTime ? "Clear Alarm" : "Set Alarm"}
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
