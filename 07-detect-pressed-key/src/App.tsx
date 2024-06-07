// Импорт стилей
import main from "./assets/style/main.module.scss";
import elevation from "./assets/style/elevation.module.scss";
import typography from "./assets/style/typography.module.scss";

// Импорт React и его компонентов
import { useEffect, useState } from "react";

// Импорт компонентов приложения

// Импорт библиотек и сторонних зависимостей

// Импорт типов и интерфейсов

// Импорт утилит и вспомогательных функций

// Импорт констант и перечислений

// Импорт изображений, шрифтов и других ресурсов

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
      code: event.keyCode || event.which,
    });
    console.log({ key: event.key, code: event.keyCode || event.which });
  };

  const handleKeyUp = () => {
    setData(undefined);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    // window.addEventListener("keyup", handleKeyUp);

    // Удаляем обработчики при размонтировании компонента
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
