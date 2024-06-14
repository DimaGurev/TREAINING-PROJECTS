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

function App() {
  const [status, setStatus] = useState<"input" | "timer">("input");
  const [isCountdownFinished, setIsCountdownFinished] = useState(false);
  const [name, setName] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");

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
    setIsCountdownFinished(
      selectedDateInSeconds - currentDateInSeconds + timezoneOffset < 0
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

  const changeStatus = () => {
    if (name && selectedDate) {
      setStatus((prev) => (prev === "input" ? "timer" : "input"));
    } else {
      if (!name) alert("'Name' field is empty");
      if (!selectedDate) alert("'Date' field is empty");
    }
  };

  return (
    <>
      <div className={main.center}>
        <div
          className={elevation.LightElevationFifth}
          style={{ width: "500px" }}
        >
          {status === "input" && (
            <Input
              name={name}
              setName={setName}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              changeStatus={changeStatus}
            />
          )}
          {status === "timer" && (
            <Timer
              isCountdownFinished={isCountdownFinished}
              name={name}
              changeStatus={changeStatus}
              {...timeObject}
              setName={setName}
              setSelectedDate={setSelectedDate}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
