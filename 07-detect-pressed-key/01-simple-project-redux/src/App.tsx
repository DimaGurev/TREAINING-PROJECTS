// Импорт стилей
import main from "./assets/style/main.module.scss";
import elevation from "./assets/style/elevation.module.scss";
import typography from "./assets/style/typography.module.scss";

// Импорт React и его компонентов
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getKeyData } from "./store/keyDataSlice";
import { RootState } from "./store/store";

const grid: React.CSSProperties = {
  margin: "0 auto",
  width: "400px",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "1fr",
};

function App() {
  const data = useSelector((state: RootState) => state.keyData);
  const dispatch = useDispatch();

  const handleKeyDown = (event: KeyboardEvent) => {
    const data = {
      key: event.key === " " ? "Space" : event.key,
      code: event.keyCode || event.which,
    };

    dispatch(getKeyData(data));
  };

  const handleKeyUp = () => {
    dispatch(getKeyData(undefined));
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <>
      <button onClick={() => console.log(data)}>qwe</button>
      <div className={main.center} style={{ textAlign: "center" }}>
        <div
          className={elevation.LightElevationFirst}
          style={{ width: "400px" }}
        >
          {data.value === undefined ? (
            <h2 className={typography.DisplaySmall}>Press any key</h2>
          ) : (
            <>
              <h2 className={main.circle}>
                <p>{data.value.code}</p>
              </h2>
              <p style={{ textTransform: "uppercase" }}>{data.value.key}</p>
              <div className={main.row} style={grid}>
                <p>Key: {data.value.key}</p>
                <p>|</p>
                <p>Code: {data.value.code}</p>
              </div>
            </>
          )}
          {/*  */}
        </div>
      </div>
    </>
  );
}

export default App;
