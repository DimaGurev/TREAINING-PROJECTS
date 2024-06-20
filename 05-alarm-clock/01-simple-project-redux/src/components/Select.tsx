import React from "react";
import { useDispatch } from "react-redux";

interface Props {
  isSetTime: boolean;
  options: string[];
  placeholder: string;
  select: string;
  // todo: указать правильный тип, а не any
  onChange: any;
}

const Select: React.FC<Props> = ({
  isSetTime,
  options,
  placeholder,
  select,
  onChange,
}) => {
  const dispatch = useDispatch();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    console.log(value);
    dispatch(onChange(value));
  };
  return (
    <select onChange={handleSelectChange} disabled={isSetTime ? true : false}>
      <option selected={select === "" ? true : false} value="">
        {placeholder}
      </option>
      {options.map((item) => (
        <option
          key={item}
          selected={select === item ? true : false}
          value={item}
        >
          {item}
        </option>
      ))}
    </select>
  );
};

export default Select;
