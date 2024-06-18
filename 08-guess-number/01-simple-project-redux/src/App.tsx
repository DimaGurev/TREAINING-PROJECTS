// Импорт стилей
import main from "./assets/style/main.module.scss";
import elevation from "./assets/style/elevation.module.scss";
import "react-toastify/dist/ReactToastify.css";

// Импорт React и его компонентов
import { useEffect, useState } from "react";

// Импорт библиотек и сторонних зависимостей
import { ToastContainer, toast } from "react-toastify";
import { settings, settingsCustomToast } from "./utils/toast";
import CustomToast from "./components/CustomToast";
import { TypeStatus } from "./types";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
  addError,
  setAvailability,
  setEnteredNumber,
  setStatus,
} from "./store/gameSlice";

function App() {
  const dispatch = useAppDispatch();

  const status = useAppSelector((state) => state.game.status);
  // const [status, setStatus] = useState<TypeStatus>("inProgress");
  const availability = useAppSelector((state) => state.game.availability);
  // const [availability, setAvailability] = useState(true);
  const randomNumber = useAppSelector((state) => state.game.randomNumber);
  // const [randomNumber] = useState(getRandomNumber(0, 10));
  const enteredNumber = useAppSelector((state) => state.game.enteredNumber);
  // const [enteredNumber, setEnteredNumber] = useState("");
  const errors = useAppSelector((state) => state.game.errors);
  // const [errors, setErrors] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (randomNumber === +enteredNumber) {
      dispatch(setStatus("victory"));
      dispatch(setAvailability(false));
    } else {
      dispatch(setEnteredNumber(""));
      dispatch(setAvailability(false));
      if (errors + 1 < 3) {
        toast.error(
          `Попробуйте ещё раз! Осталось попыток ${3 - errors - 1}`,
          settings
        );
      }
      dispatch(addError());
    }
  };

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setEnteredNumber(value));
  };
  console.log(status);

  useEffect(() => {
    if (status === "victory") {
      notify(status);
    }
    if (status === "defeat") {
      dispatch(setAvailability(false));
      notify(status);
    }
  }, [status]);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    if (!(errors === 3)) {
      setTimeout(() => {
        dispatch(setAvailability(true));
      }, 1000);
    }
  }, [errors]);

  const notify = (status: TypeStatus) => {
    toast(
      <CustomToast status={status} randomNumber={randomNumber} />,
      settingsCustomToast
    );
  };

  return (
    <>
      <div className={main.center}>
        <div
          className={`${elevation.LightElevationFirst} ${
            !availability && "non-clickable"
          }`}
          style={{ width: "400px", textAlign: "center" }}
        >
          <h1>Угадай число</h1>
          <p>
            Угадай число — игра, в которой нужно угадать число. задается
            компьютером от 0 до 10. Используйте как можно меньше попыток.
            возможный. Удачи!
          </p>
          <form onSubmit={submitForm}>
            <input
              value={enteredNumber}
              onChange={handleValue}
              type="number"
              max={10}
              placeholder="Введите число"
              disabled={!availability}
            />
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
