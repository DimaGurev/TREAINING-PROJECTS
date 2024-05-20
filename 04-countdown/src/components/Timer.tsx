import main from "./../assets/style/main.module.scss";
import buttons from "./../assets/style/buttons.module.scss";
import typography from "./../assets/style/typography.module.scss";
import TimeBlock from "./TimeBlock";
import { PropsTimer } from "../App";

const Timer: React.FC<PropsTimer> = ({ nameTimer,  setActiveSection }) => {
  return (
    <>
      <h2 className={typography.TitleLarge} style={{ textAlign: "center" }}>
        {nameTimer || "Countdown"}
      </h2>

      <div className={main.row}>
        <TimeBlock title="Days" number={0} />
        <TimeBlock title="Hours" number={0} />
        <TimeBlock title="Minutes" number={0} />
        <TimeBlock title="Seconds" number={0} />
      </div>

      <button onClick={() => setActiveSection("input")} className={buttons.FilledButtons} style={{ marginTop: "30px", width: "100%" }}>
        Submit
      </button>
    </>
  );
};

export default Timer;
