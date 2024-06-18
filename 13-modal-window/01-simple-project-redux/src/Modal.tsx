// Импорт React и его компонентов
import React from "react";

// Импорт стилей
import elevation from "./assets/style/elevation.module.scss";
import main from "./assets/style/main.module.scss";
import typography from "./assets/style/typography.module.scss";
import buttons from "./assets/style/buttons.module.scss";
import { useAppDispatch } from "./store/hooks";
import { modalClose } from "./store/modalSlice";

const overlayStyle: React.CSSProperties = {
  width: "10vw",
  height: "100vh",
  background: "#bd23231c",
  position: "fixed",
  left: 0,
  top: 0,
};

const Modal = () => {
  const dispatch = useAppDispatch();

  const close = () => {
    dispatch(modalClose());
  };

  // Обработчик клика для предотвращения всплытия
  const handleModalClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };
  return (
    <>
      <div
        className={`${main.center} wrap`}
        style={overlayStyle}
        onClick={close}
      >
        <div
          onClick={handleModalClick}
          className={`${elevation.DarkElevationFifth} modal`}
        >
          <span onClick={close} className="close">
            x
          </span>
          <h1 className={typography.DisplayMedium} style={{ color: "#fff" }}>
            Modal Window
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            quaerat ullam dignissimos dolorum, ea at reprehenderit mollitia?
            Optio, excepturi, consequatur veritatis id accusantium maxime
            fugiat, mollitia voluptatibus et recusandae voluptate?
          </p>
          <button onClick={close} className={buttons.FilledButtons}>
            Close Window
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
