// Импорт стилей
import main from "./assets/style/main.module.scss";
import elevation from "./assets/style/elevation.module.scss";
import typography from "./assets/style/typography.module.scss";

// Импорт React и его компонентов
import { useEffect, useState } from "react";

const grid: React.CSSProperties = {
  margin: "0 auto",
  width: "400px",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "1fr",
};

interface Data {
  key: string;
  code: number;
}

type DataType = undefined | Data;

function App() {
  const [data, setData] = useState<DataType>(undefined);

  const handleKeyDown = (event: KeyboardEvent) => {
    setData({
      key: event.key === " " ? "Space" : event.key,
      code: event.code.charCodeAt(0),
    });
  };

  const handleKeyUp = () => {
    setData(undefined);
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
      <div className={main.center} style={{ textAlign: "center" }}>
        <div
          className={elevation.LightElevationFirst}
          style={{ width: "400px" }}
        >
          {data === undefined ? (
            <h2 className={typography.DisplaySmall}>Press any key</h2>
          ) : (
            <>
              <h2 className={main.circle}>
                <p>{data.code}</p>
              </h2>
              <p style={{ textTransform: "uppercase" }}>{data.key}</p>
              <div className={main.row} style={grid}>
                <p>Key: {data.key}</p>
                <p>|</p>
                <p>Code: {data.code}</p>
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
