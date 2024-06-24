import { useState } from "react";
import style from "./Select.module.scss";
import { IoIosArrowUp } from "react-icons/io";

interface Props {
  variants: string[];
  setOption: (option: string) => void;
  width?: string;
}

const Select: React.FC<Props> = ({ variants, setOption, width }) => {
  const [selected, setSelected] = useState(variants[0] || "");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (name: string) => {
    setSelected(name);
    setOption(name);
    setIsOpen(false);
  };

  return (
    <div
      className={style.border}
      style={{ minWidth: width }}
      role="listbox"
      aria-expanded={isOpen}
    >
      <p onClick={handleSelectClick}>
        {selected}{" "}
        <IoIosArrowUp className={`${style.arrow} ${isOpen && style.rotate}`} />
      </p>
      {isOpen && (
        <div className={style.variants}>
          <ul>
            {variants.map((item) => (
              <li
                onClick={() => handleOptionClick(item)}
                key={item}
                role="option"
                aria-selected={selected === item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
