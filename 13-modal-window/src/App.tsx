import React from "react";

import "./App.css";
import elevation from "./assets/style/elevation.module.scss";
import main from "./assets/style/main.module.scss";
import typography from "./assets/style/typography.module.scss";
import buttons from "./assets/style/buttons.module.scss";
import Modal from "./Modal";

function App() {
  const [openModal, setOpenModal] = React.useState(false);

  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };
  return (
    <>
      <div className={`${main.center} wrap`}>
        <div className={elevation.LightElevationFifth}>
          <h1 className={typography.DisplayMedium}>Modal Window</h1>
          <button onClick={handleModal} className={buttons.OutlinedButtons}>
            Open Modal
          </button>
        </div>
      </div>
      {openModal ? <Modal handleModal={handleModal} /> : null}
    </>
  );
}

export default App;
