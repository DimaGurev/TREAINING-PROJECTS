// Импорт стилей
import main from "./assets/style/main.module.scss";
import elevation from "./assets/style/elevation.module.scss";
import "react-toastify/dist/ReactToastify.css";

// Импорт React и его компонентов
import { useEffect, useState } from "react";

// Импорт библиотек и сторонних зависимостей
import { ToastContainer, ToastOptions, toast } from "react-toastify";

type TypeStatus = "victory" | "defeat" | "inProgress";

interface CustomToastProps {
  status: TypeStatus;
  randomNumber: number;
}

const CustomToast: React.FC<CustomToastProps> = ({ status, randomNumber }) => (
  <div>
    {status === "victory" ? (
      <p>Вы угадали число 🥳</p>
    ) : (
      <p>Вы проиграли 🥲!</p>
    )}
    <p>Загаданное число - {randomNumber}</p>
    <button
      onClick={() => {
        window.location.reload();
      }}
      style={{
        display: "block",
        margin: "0 auto",
        background: status === "victory" ? "green" : "red",
        border: "none",
        borderRadius: "10px",
        padding: "10px",
        color: "white",
      }}
    >
      Играть снова?
    </button>
  </div>
);

const settingsCustomToast: ToastOptions = {
  position: "bottom-center",
  autoClose: false, // Уведомление не исчезает автоматически
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: false,
  closeButton: false, // Убирает крестик на уведомлении
  onClose: () => window.location.reload(),
  style: {
    background: "",
  },
};
const settings: ToastOptions = {
  position: "bottom-center",
  autoClose: 500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
};

function App() {
  const [status, setStatus] = useState<TypeStatus>("inProgress");
  const [availability, setAvailability] = useState(true);
  const [randomNumber] = useState(getRandomNumber(0, 10));
  const [enteredNumber, setEnteredNumber] = useState("");
  const [errors, setErrors] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (randomNumber === +enteredNumber) {
      setStatus("victory");
      setAvailability(false);
    } else {
      setEnteredNumber("");
      setAvailability(false);
      if (errors + 1 < 3) {
        toast.error(
          `Попробуйте ещё раз! Осталось попыток ${3 - errors - 1}`,
          settings
        );
      }
      setErrors((prev) => {
        if (prev + 1 === 3) {
          setStatus("defeat");
        }
        return prev + 1;
      });
      setStatus("inProgress");
    }
  };

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEnteredNumber(value);
  };

  useEffect(() => {
    if (status === "victory") {
      notify(status);
    }
    if (status === "defeat") {
      setAvailability(false);
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
        setAvailability(true);
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
function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
