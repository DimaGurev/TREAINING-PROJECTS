// Импорт стилей
import { InputProps } from "../types";
import buttons from "./../assets/style/buttons.module.scss";
import typography from "./../assets/style/typography.module.scss";
// Импорт React и его компонентов
import { useState } from "react";

// Импорт компонентов приложения

// Импорт библиотек и сторонних зависимостей

// Импорт типов и интерфейсов

// Импорт утилит и вспомогательных функций

// Импорт констант и перечислений

// Импорт изображений, шрифтов и других ресурсов

const Input: React.FC<InputProps> = ({
  name,
  setName,
  selectedDate,
  setSelectedDate,
  changeStatus,
}) => {
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  return (
    <>
      <h4 className={typography.LabelLarge}>Name</h4>
      <input
        onChange={(e) => changeName(e)}
        value={name}
        type="text"
        placeholder="What are you counting down to?"
      />

      <h4 className={typography.LabelLarge}>Date</h4>
      <input
        onChange={(e) => handleDateChange(e)}
        type="date"
        value={selectedDate}
      />

      <button
        onClick={changeStatus}
        className={buttons.FilledButtons}
        style={{ marginTop: "30px", width: "100%" }}
      >
        Submit
      </button>
    </>
  );
};

export default Input;
