// Импорт стилей
import elevation from "./assets/style/elevation.module.scss";
import main from "./assets/style/main.module.scss";

// Импорт React и его компонентов
import { useEffect, useState } from "react";

// Импорт компонентов приложения
import Timer from "./components/Timer";
import Input from "./components/Input";

// Импорт утилит и вспомогательных функций
import { convertSecondsToDHMS } from "./utils/time";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { setIsCountdownFinished } from "./store/gameSlice";

function App() {
  const dispatch = useAppDispatch();

  const status = useAppSelector((state) => state.game.status);
  const isCountdownFinished = useAppSelector(
    (state) => state.game.isCountdownFinished
  );
  const selectedDate = useAppSelector((state) => state.game.selectedDate);

  const selectedDateInSeconds = new Date(selectedDate).getTime() / 1000;
  const currentDate = new Date();
  const currentDateInSeconds = currentDate.getTime() / 1000;
  const timezoneOffset = currentDate.getTimezoneOffset() * 60;

  const [timeDifferenceInSeconds, setTimeDifferenceInSeconds] = useState(
    selectedDateInSeconds - currentDateInSeconds + timezoneOffset
  );

  const timeObject = convertSecondsToDHMS(timeDifferenceInSeconds);

  useEffect(() => {
    setTimeDifferenceInSeconds(
      selectedDateInSeconds - currentDateInSeconds + timezoneOffset
    );
    dispatch(
      setIsCountdownFinished(
        selectedDateInSeconds - currentDateInSeconds + timezoneOffset < 0
      )
    );
  }, [selectedDate]);

  useEffect(() => {
    let interval: number;
    if (status === "timer" && !isCountdownFinished) {
      interval = setInterval(() => {
        setTimeDifferenceInSeconds((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [status]);

  return (
    <>
      <div className={main.center}>
        <div
          className={elevation.LightElevationFifth}
          style={{ width: "500px" }}
        >
          {status === "input" && <Input />}
          {status === "timer" && <Timer {...timeObject} />}
        </div>
      </div>
    </>
  );
}

export default App;
