// Импорт React и его компонентов
import React, { useEffect } from "react";

// Импорт стилей
import "./App.css";
import elevation from "./assets/style/elevation.module.scss";
import main from "./assets/style/main.module.scss";
import typography from "./assets/style/typography.module.scss";
import buttons from "./assets/style/buttons.module.scss";

// Импорт компонентов
import Modal from "./Modal";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { modalClose, modalOpen } from "./store/modalSlice";

function App() {
  const isModal = useAppSelector((state) => state.modal.isOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        dispatch(modalClose());
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className={`${main.center} wrap`}>
        <div className={elevation.LightElevationFifth}>
          <h1 className={typography.DisplayMedium}>Modal Window</h1>
          <button
            onClick={() => dispatch(modalOpen())}
            className={buttons.OutlinedButtons}
          >
            Open Modal
          </button>
        </div>
      </div>
      {isModal ? <Modal /> : null}
    </>
  );
}

export default App;
