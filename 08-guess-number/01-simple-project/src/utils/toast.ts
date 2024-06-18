import { ToastOptions } from "react-toastify";
import CustomToast, { TypeStatus } from "../components/CustomToast";

export const settingsCustomToast: ToastOptions = {
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
export const settings: ToastOptions = {
  position: "bottom-center",
  autoClose: 500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
};
