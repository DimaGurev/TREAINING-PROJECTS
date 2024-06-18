import { TypeStatus } from "../types";

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
export default CustomToast;
