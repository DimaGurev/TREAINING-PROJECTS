import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

type Props = any;

const Converter: React.FC<Props> = ({ data }) => {
  const [kef, setKef] = useState<number>(0);
  console.log(data);
  console.log(data.desc);

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setKef(+e.target.value);
  };

  return (
    <div>
      <p>{data.desc}</p>
      {Object.entries(data.par).map(([key, value]) => (
        <label>
          <p>{capitalizeFirstLetter(key)}</p>
          <input
            onChange={handle}
            type="number"
            value={kef * +value}
            placeholder={capitalizeFirstLetter(key)}
          />
        </label>
      ))}
      <label>
        <p>Pounds</p>
        <input type="text" placeholder="Pounds" />
      </label>
    </div>
  );
};

export default Converter;
