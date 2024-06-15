// Импорт стилей
import elevation from "./../assets/style/elevation.module.scss";
import buttons from "./../assets/style/buttons.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { changeStatus as setStatus } from "./../store/timerSlice";
import { changeMinutes } from "../store/minutesSlice";
import { RootState } from "../store/store";

const TimerInputForm: React.FC = () => {
  const minutes = useSelector((state: RootState) => state.minutes.value);
  const dispatch = useDispatch();

  return (
    <div className={elevation.LightElevationFifth} style={{ width: "400px" }}>
      <h2>Timer</h2>
      <input
        value={minutes}
        onChange={(e) => dispatch(changeMinutes(e.target.value))}
        type="text"
        placeholder="Enter number of minutes (maximum - 60):"
      />
      <br />
      <button
        onClick={() => dispatch(setStatus(minutes))}
        className={buttons.FilledButtons}
        style={{ width: "100%" }}
      >
        Start
      </button>
    </div>
  );
};

export default TimerInputForm;
