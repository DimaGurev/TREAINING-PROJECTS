import React, { useState } from "react";
import buttons from "./../assets/style/buttons.module.scss";
import typography from "./../assets/style/typography.module.scss";

import { PropsInput } from "../App";

const Input: React.FC<PropsInput> = ({ nameTimer, setNameTimer, setActiveSection }) => {
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameTimer(e.target.value);
  };

  const getDateObject = () => {
    if (!selectedDate) return null;
    return new Date(selectedDate);
  };

  const dateObject = getDateObject();
  const hours = dateObject ? dateObject.getHours() : "--";
  const minutes = dateObject ? dateObject.getMinutes() : "--";
  const seconds = dateObject ? dateObject.getSeconds() : "--";

  const getCurrentTime = () => {
    const now = new Date();
    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
    };
  };

  return (
    <>
      <h2 className={typography.TitleLarge}>Countdown</h2>
      <p>selectedDate: {selectedDate}</p>
      <p>
        {hours}:{minutes}:{seconds}
      </p>
      <p>
        getCurrentTime {getCurrentTime().hours}:{getCurrentTime().minutes}:{getCurrentTime().seconds}
      </p>

      <h4 className={typography.LabelLarge}>Name</h4>
      <input onChange={handleName} value={nameTimer} type="text" placeholder="What are you counting down to?" />

      <h4 className={typography.LabelLarge}>Date</h4>
      <input type="date" value={selectedDate} onChange={handleDateChange} />

      <button onClick={() => setActiveSection("timer")} className={buttons.FilledButtons} style={{ marginTop: "30px", width: "100%" }}>
        Submit
      </button>
    </>
  );
};

export default Input;
