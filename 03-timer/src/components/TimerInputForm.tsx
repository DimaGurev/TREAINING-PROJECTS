import elevation from "./../assets/style/elevation.module.scss";
import buttons from "./../assets/style/buttons.module.scss";
import { Minuts, Props, Status } from "../App";



const TimerInputForm: React.FC<Props> = ({ minuts, setMinuts, setStatus }) => {
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = Number(e.target.value);
    if (!Number.isNaN(value) && value <= 999999999999999) {
      setMinuts(value !== 0 ? value : undefined);
    }
  };

  const changeStatus = (): void => {
    if (minuts !== undefined && minuts) {
      setStatus("control");
    }
  };

  return (
    <div className={elevation.LightElevationFifth} style={{ width: "400px" }}>
      <h2>Timer</h2>
      <input value={typeof minuts === "number" ? minuts : ""} onChange={changeValue} type="text" placeholder="Enter number of minutes (maximum - 60):" />
      <br />
      <button onClick={changeStatus} className={buttons.FilledButtons} style={{ width: "100%" }}>
        Start
      </button>
    </div>
  );
};

export default TimerInputForm;
