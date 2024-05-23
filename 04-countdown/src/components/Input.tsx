import React, { useState } from "react";
import buttons from "./../assets/style/buttons.module.scss";
import typography from "./../assets/style/typography.module.scss";

import { PropsInput } from "../App";

const Input: React.FC<PropsInput> = ({
  nameTimer,
  setNameTimer,
  setActiveSection,
  selectedDate,
  setSelectedDate,
}) => {
  // date

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameTimer(e.target.value);
  };

  return (
    <>
      <h4 className={typography.LabelLarge}>Name</h4>
      <input
        onChange={handleName}
        value={nameTimer}
        type="text"
        placeholder="What are you counting down to?"
      />

      <h4 className={typography.LabelLarge}>Date</h4>
      <input type="date" value={selectedDate} onChange={handleDateChange} />

      <button
        onClick={() => setActiveSection("timer")}
        className={buttons.FilledButtons}
        style={{ marginTop: "30px", width: "100%" }}
        disabled={selectedDate ? false : true}
      >
        Submit
      </button>
    </>
  );
};

export default Input;
