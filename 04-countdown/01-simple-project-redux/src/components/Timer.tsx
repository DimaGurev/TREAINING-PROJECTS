// Импорт стилей
import main from "./../assets/style/main.module.scss";
import buttons from "./../assets/style/buttons.module.scss";
import typography from "./../assets/style/typography.module.scss";

// Импорт компонентов приложения
import TimeBlock from "./TimeBlock";

// Импорт типов и интерфейсов
import { TimerProps } from "../types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setName, setSelectedDate, toogleStatus } from "../store/gameSlice";

const Timer: React.FC<TimerProps> = ({ days, hours, minutes, seconds }) => {
  const dispatch = useAppDispatch();

  const name = useAppSelector((state) => state.game.name);
  const isCountdownFinished = useAppSelector(
    (state) => state.game.isCountdownFinished
  );

  const resetTimer = () => {
    dispatch(toogleStatus());
    dispatch(setName(""));
    dispatch(setSelectedDate(""));
  };

  return (
    <>
      {isCountdownFinished ? (
        <>
          <h2
            className={typography.DisplaySmall}
            style={{ textAlign: "center" }}
          >
            Countdown Completed 🎊
          </h2>
        </>
      ) : (
        <>
          <h2 className={typography.TitleLarge} style={{ textAlign: "center" }}>
            {name}
          </h2>

          <div className={main.row}>
            <TimeBlock title="Days" number={days} />
            <TimeBlock title="Hours" number={hours} />
            <TimeBlock title="Minutes" number={minutes} />
            <TimeBlock title="Seconds" number={seconds} />
          </div>
        </>
      )}

      <button
        onClick={resetTimer}
        className={buttons.FilledButtons}
        style={{ marginTop: "30px", width: "100%" }}
      >
        Reset
      </button>
    </>
  );
};

export default Timer;
