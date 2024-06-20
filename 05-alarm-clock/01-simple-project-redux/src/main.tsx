// Импорт стилей
import "./assets/style/fonts.scss";
import "./assets/style/normalize.scss";
import "./assets/style/main.scss";

// Импорт React и его компонентов
import React from "react";
import ReactDOM from "react-dom/client";

// Импорт компонентов приложения
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
