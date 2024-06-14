// Импорт стилей
import elevation from "./../assets/style/elevation.module.scss";
import buttons from "./../assets/style/buttons.module.scss";

// Импорт пропсов
import { Props } from "../App";

const TimerInputForm: React.FC<Props> = ({
  minutes,
  setMinutes,
  setTimerStatus,
}) => {
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = Number(e.target.value);
    if (!Number.isNaN(value) && value <= 999999999999999) {
      setMinutes(value !== 0 ? value : undefined);
    }
  };

  const changeStatus = (): void => {
    if (minutes !== undefined && minutes) {
      setTimerStatus("control");
    }
  };

  return (
    <div className={elevation.LightElevationFifth} style={{ width: "400px" }}>
      <h2>Timer</h2>
      <input
        value={typeof minutes === "number" ? minutes : ""}
        onChange={changeValue}
        type="text"
        placeholder="Enter number of minutes (maximum - 60):"
      />
      <br />
      <button
        onClick={changeStatus}
        className={buttons.FilledButtons}
        style={{ width: "100%" }}
      >
        Start
      </button>
    </div>
  );
};

export default TimerInputForm;
