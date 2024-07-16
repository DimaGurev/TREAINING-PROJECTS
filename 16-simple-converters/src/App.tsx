import mainStyle from "./assets/style/main.module.scss";
import elevation from "./assets/style/elevation.module.scss";
import typography from "./assets/style/typography.module.scss";
import { useState } from "react";
import { capitalizeFirstLetter } from "./utils/capitalizeFirstLetter";
import Converter from "./components/Converter/Converter";

enum Options {
  none = "",
  weight = "weight",
  temperature = "temperature",
  length = "length",
  speed = "speed",
  case = "case",
}
const convert = {
  weight: {
    desc: "Type a value in any of the fields to convert between weight",
    par: {
      pounds: 1,
      ounces: 16,
      stones: 0.071,
      kilograms: 0.45,
      grams: 454,
    },
  },
};

function App() {
  const [option, setOption] = useState<Options>(Options.none);
  console.log(Object.entries(Options));

  const handleOptions = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setOption(e.target.value as Options);
  };

  // -----------------------

  return (
    <>
      <div className={mainStyle.center}>
        <div
          className={elevation.LightElevationThird}
          style={{ width: "500px" }}
        >
          <h1
            className={typography.HeadlineLarge}
            style={{ textAlign: "center" }}
          >
            Simple Converter{option}
          </h1>
          <select onChange={(e) => handleOptions(e)}>
            {Object.entries(Options).map(([key, value]) => (
              <option key={key} value={value as Options}>
                {value !== "" ? capitalizeFirstLetter(value) + " " : "Select "}
                Converter
              </option>
            ))}
          </select>
          {/* -------- */}
          <Converter data={convert.weight} />
          {/* -------- */}
        </div>
      </div>
    </>
  );
}

export default App;
