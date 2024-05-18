import main from "./assets/style/main.module.scss";
import { useState } from "react";
import TimerInputForm from "./components/TimerInputForm";
import TimerControlPanel from "./components/TimerControlPanel";

type Status = React.Dispatch<React.SetStateAction<"input" | "control">>;
type Minuts = React.Dispatch<React.SetStateAction<number | undefined>>;

export interface Props {
  minuts: number | undefined;
  setMinuts: Minuts;
  setStatus: Status;
}

function App() {
  const [status, setStatus] = useState<"input" | "control">("input");

  const [minuts, setMinuts] = useState<number>();

  return (
    <div className={main.center} style={{ textAlign: "center" }}>
      {status === "input" && <TimerInputForm minuts={minuts} setMinuts={setMinuts} setStatus={setStatus} />}
      {status === "control" && <TimerControlPanel minuts={minuts} setMinuts={setMinuts} setStatus={setStatus} />}
    </div>
  );
}

export default App;
