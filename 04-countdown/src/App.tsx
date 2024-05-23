// Импорты библиотек
import { useState } from "react";

// Импорты стилей
import main from "./assets/style/main.module.scss";
import elevation from "./assets/style/elevation.module.scss";

// Импорты компонентов
import Timer from "./components/Timer";
import Input from "./components/Input";

type Section = "input" | "timer";

export interface PropsInput {
  setActiveSection: React.Dispatch<React.SetStateAction<Section>>;
  nameTimer: string;
  setNameTimer: React.Dispatch<React.SetStateAction<string>>;
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
}

export interface PropsTimer {
  setActiveSection: React.Dispatch<React.SetStateAction<Section>>;
  nameTimer: string;
  selectedDate: string;
}

// TODO: Сделать чтоб таймер сохранялся в браузере
function App() {
  const [activeSection, setActiveSection] = useState<Section>("input");
  const [nameTimer, setNameTimer] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");

  return (
    <>
      <div className={main.center}>
        <div
          className={elevation.LightElevationFifth}
          style={{ width: "500px" }}
        >
          {activeSection === "input" && (
            <Input
              setActiveSection={setActiveSection}
              nameTimer={nameTimer}
              setNameTimer={setNameTimer}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          )}
          {activeSection === "timer" && (
            <Timer
              setActiveSection={setActiveSection}
              nameTimer={nameTimer}
              selectedDate={selectedDate}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
