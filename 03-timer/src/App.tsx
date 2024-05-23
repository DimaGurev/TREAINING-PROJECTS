// Импорт стилей
import main from "./assets/style/main.module.scss";

// Импорт React Hooks
import { useState } from "react";

// Импорт компонентов
import TimerInputForm from "./components/TimerInputForm";
import TimerControlPanel from "./components/TimerControlPanel";

// Определение типов и интерфейсов
type Status = React.Dispatch<React.SetStateAction<"input" | "control">>;
type Minutes = React.Dispatch<React.SetStateAction<number | undefined>>;

export interface Props {
  minutes: number | undefined;
  setMinutes: Minutes;
  setTimerStatus: Status;
}

function App() {
  const [timerStatus, setTimerStatus] = useState<"input" | "control">("input");

  const [minutes, setMinutes] = useState<number>();

  return (
    <div className={main.center} style={{ textAlign: "center" }}>
      {timerStatus === "input" && (
        <TimerInputForm
          minutes={minutes}
          setMinutes={setMinutes}
          setTimerStatus={setTimerStatus}
        />
      )}
      {timerStatus === "control" && (
        <TimerControlPanel
          minutes={minutes}
          setMinutes={setMinutes}
          setTimerStatus={setTimerStatus}
        />
      )}
    </div>
  );
}

export default App;
