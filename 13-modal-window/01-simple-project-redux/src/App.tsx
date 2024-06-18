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

function App() {
  const [openModal, setOpenModal] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setOpenModal(false);
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
            onClick={() => setOpenModal(true)}
            className={buttons.OutlinedButtons}
          >
            Open Modal
          </button>
        </div>
      </div>
      {openModal ? <Modal setOpenModal={setOpenModal} /> : null}
    </>
  );
}

export default App;
