// Импорт стилей
import main from "./assets/style/main.module.scss";
import elevation from "./assets/style/elevation.module.scss";
import typography from "./assets/style/typography.module.scss";
import buttons from "./assets/style/buttons.module.scss";

// Импорт React и его компонентов
import { useEffect } from "react";
// Импорт компонентов приложения
import Select from "./components/Select";

// Импорт изображений, шрифтов и других ресурсов
import { LuAlarmClock } from "react-icons/lu";
import ringtone from "/sounds/ringtone.mp3";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
  setCurrentTime,
  setIsTimerFinished,
  setSelectHours,
  setSelectMinutes,
  setselectAMPM,
  toggleIsSetTime,
} from "./store/clockSlice";

const audio = new Audio(ringtone);

const options = {
  hours: Array.from({ length: 12 }, (_, i) => `${++i}`),
  minutes: Array.from({ length: 60 }, (_, i) => `${++i}`),
  ampm: ["AM", "PM"],
};

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const currentTime = useAppSelector((state) => state.clock.currentTime);
  const isSetTime = useAppSelector((state) => state.clock.isSetTime);
  const isTimerFinished = useAppSelector(
    (state) => state.clock.isTimerFinished
  );
  const selectHours = useAppSelector((state) => state.clock.selectHours);
  const selectMinutes = useAppSelector((state) => state.clock.selectMinutes);
  const selectAMPM = useAppSelector((state) => state.clock.selectAMPM);

  const hours: number = currentTime.hours;
  const minutes: number = currentTime.minutes;
  const seconds: number = currentTime.seconds;

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setCurrentTime());
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
        dispatch(setIsTimerFinished(true));
      }

      clearInterval(interval);
    };
  });

  const handlePlay = () => {
    audio.play();
    audio.loop = true;
  };
  const handleReset = () => {
    audio.pause();
    audio.currentTime = 0;
    dispatch(setSelectHours(""));
    dispatch(setSelectMinutes(""));
    dispatch(setselectAMPM(""));
  };

  const checkTime = () => {
    console.log(selectHours, selectMinutes, selectAMPM);

    if (selectHours && selectMinutes && selectAMPM) {
      dispatch(toggleIsSetTime());
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
