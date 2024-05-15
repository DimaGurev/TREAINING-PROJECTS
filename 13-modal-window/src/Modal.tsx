import React from "react";

import elevation from "./assets/style/elevation.module.scss";
import main from "./assets/style/main.module.scss";
import typography from "./assets/style/typography.module.scss";
import buttons from "./assets/style/buttons.module.scss";

const Modal = ({ handleModal }: any) => {
  return (
    <>
      <div className={`${main.center} wrap`} style={{ width: "10vw", height: "100vh", background: "#bd23231c", position: "fixed", left: 0, top: 0 }}>
        <div className={`${elevation.DarkElevationFifth} modal`}>
          <span onClick={handleModal} className="close">
            x
          </span>
          <h1 className={typography.DisplayMedium} style={{ color: "#fff" }}>
            Modal Window
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quaerat ullam dignissimos dolorum, ea at reprehenderit mollitia? Optio,
            excepturi, consequatur veritatis id accusantium maxime fugiat, mollitia voluptatibus et recusandae voluptate?
          </p>
          <button onClick={handleModal} className={buttons.FilledButtons}>
            Close Window
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
