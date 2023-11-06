import { FC, useEffect, useRef, useState } from "react";
import { IListSearchSelect } from "../../utils/types";
import { ReactComponent as IconArrowDown } from "../../assets/arrow-down.svg";
import "./SelectSearch.scss";

interface ISelectSearch {
  title: string;
  data: IListSearchSelect[];
  currentValue: string;
  handler(value: string): void;
}

export const SelectSearch: FC<ISelectSearch> = ({ title, data, currentValue, handler }) => {
  const [currentOptionName, setCurrentOptionName] = useState(data[0].title);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const refSelect = useRef<HTMLDivElement>(null);

  const setCurrentOption = () => {
    data.forEach((el) => {
      if (el.value === currentValue) setCurrentOptionName(el.title);
    });
  };

  const handleSelect = (value: string) => {
    setCurrentOptionName(value);
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const checkClickOut = (e: MouseEvent) => {
    if (isOpen && refSelect.current && !refSelect.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", checkClickOut);

    return () => {
      document.removeEventListener("mousedown", checkClickOut);
    };
  }, [isOpen]);

  useEffect(() => {
    setCurrentOption();
  }, []);

  return (
    <div className="search-select" ref={refSelect}>
      <p className="search-select__title">{title}</p>
      <div className="search-select__current" onClick={handleOpen}>
        {currentOptionName}
        <IconArrowDown />
      </div>
      <ul className={`search-select__dropdown${isOpen ? " open" : ""}`}>
        {data.map((el) => (
          <li
            key={el.value}
            className={`search-select__option${el.title === currentOptionName ? " selected" : ""}`}
            onClick={() => {
              handler(el.value);
              handleSelect(el.title);
            }}
          >
            {el.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
