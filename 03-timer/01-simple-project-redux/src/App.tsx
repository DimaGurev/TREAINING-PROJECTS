// Импорт стилей
import main from "./assets/style/main.module.scss";

// Импорт React Hooks
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

// Импорт компонентов
import TimerInputForm from "./components/TimerInputForm";
import TimerControlPanel from "./components/TimerControlPanel";

function App() {
  const timerStatus = useSelector((state: RootState) => state.timer.value);

  return (
    <div className={main.center} style={{ textAlign: "center" }}>
      {timerStatus === "input" && <TimerInputForm />}
      {timerStatus === "control" && <TimerControlPanel />}
    </div>
  );
}

export default App;
