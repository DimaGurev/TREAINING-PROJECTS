import React from "react";
import elevation from "./../assets/style/elevation.module.scss";

interface Props {
  title: string;
  number: number;
}

const TimeBlock: React.FC<Props> = ({ title, number }) => {
  return (
    <div style={{ color: "#fff", textAlign: "center", margin: "10px" }} className={elevation.DarkElevationFirst}>
      <p>{number}</p>
      <p>{title}</p>
    </div>
  );
};

export default TimeBlock;
