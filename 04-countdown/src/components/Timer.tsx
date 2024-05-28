// Импорт стилей
import main from "./../assets/style/main.module.scss";
import buttons from "./../assets/style/buttons.module.scss";
import typography from "./../assets/style/typography.module.scss";

// Импорт React и его компонентов

// Импорт компонентов приложения
import TimeBlock from "./TimeBlock";

// Импорт библиотек и сторонних зависимостей

// Импорт типов и интерфейсов
import { TimerProps } from "../types";

// Импорт утилит и вспомогательных функций

// Импорт констант и перечислений

// Импорт изображений, шрифтов и других ресурсов

const Timer: React.FC<TimerProps> = ({
  isCountdownFinished,
  name,
  days,
  hours,
  minutes,
  seconds,
  changeStatus,
  setName,
  setSelectedDate,
}) => {
  const resetTimer = () => {
    changeStatus();
    setName("");
    setSelectedDate("");
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
