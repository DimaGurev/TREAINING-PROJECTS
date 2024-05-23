import main from "./../assets/style/main.module.scss";
import buttons from "./../assets/style/buttons.module.scss";
import typography from "./../assets/style/typography.module.scss";
import TimeBlock from "./TimeBlock";
import { PropsTimer } from "../App";
import { useEffect, useState } from "react";

const Timer: React.FC<PropsTimer> = ({
  nameTimer,
  setActiveSection,
  selectedDate,
}) => {
  const [seconds, setSeconds] = useState<number>(
    convertDateToUnixSeconds(selectedDate) - Math.floor(Date.now() / 1000)
  );

  const date = convertUnixSeconds(
    seconds - new Date().getTimezoneOffset() * 60
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(
        convertDateToUnixSeconds(selectedDate) - Math.floor(Date.now() / 1000)
      );
    }, 1000);
    setSeconds;

    return () => clearInterval(interval);
  }, [selectedDate]);

  return (
    <>
      <h2 className={typography.TitleLarge} style={{ textAlign: "center" }}>
        {nameTimer || "Countdown"}
      </h2>

      <div className={main.row}>
        <TimeBlock title="Days" number={date.days} />
        <TimeBlock title="Hours" number={date.hours} />
        <TimeBlock title="Minutes" number={date.minutes} />
        <TimeBlock title="Seconds" number={date.seconds} />
      </div>

      <button
        onClick={() => setActiveSection("input")}
        className={buttons.FilledButtons}
        style={{ marginTop: "30px", width: "100%" }}
      >
        Reset
      </button>
    </>
  );
};

// Вывод: { days: 11430, hours: 8, minutes: 25, seconds: 21 }
function convertUnixSeconds(seconds: number) {
  const days = Math.floor(seconds / (24 * 3600));
  seconds %= 24 * 3600;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function convertDateToUnixSeconds(date: string) {
  // Получение времени в миллисекундах с начала эпохи
  let timeInMilliseconds = new Date(date).getTime();

  // Преобразование миллисекунд в секунды
  let timeInSeconds = Math.floor(timeInMilliseconds / 1000);

  return timeInSeconds;
}

export default Timer;
