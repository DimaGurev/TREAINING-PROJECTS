import { ToastOptions, toast } from "react-toastify";

const setting: ToastOptions = {
  position: "bottom-center",
  autoClose: 1000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  progress: undefined,
  theme: "light",
};

export const notifyCurrentNotAnswer = (currentWord?: string) => {
  toast.dismiss();
  toast.error(
    "Please enter the word to check!" + ` ${currentWord}` || "",
    setting
  );
};

export const notifyСurrentAnswer = (currentWord: string) => {
  toast.dismiss();
  toast.success(
    `Congrats! The correct word is: ${currentWord.toLocaleUpperCase()}`,
    setting
  );
};
