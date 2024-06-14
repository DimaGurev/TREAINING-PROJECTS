// Импорт стилей
import main from "./assets/style/main.module.scss";

// Импорт React Hooks
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store";

// Импорт компонентов
import TimerInputForm from "./components/TimerInputForm";
import TimerControlPanel from "./components/TimerControlPanel";
import { changeMinutes } from "./store/minutesSlice";

function App() {
  const timerStatus = useSelector((state: RootState) => state.timer.value);
  const minutes = useSelector((state: RootState) => state.minutes.value);
  const dispatch = useDispatch();

  return (
    <div className={main.center} style={{ textAlign: "center" }}>
      <p onClick={() => dispatch(changeMinutes(1))} style={{ color: "#fff" }}>
        {minutes}
      </p>
      {timerStatus === "input" && <TimerInputForm />}
      {timerStatus === "control" && <TimerControlPanel />}
    </div>
  );
}

export default App;
