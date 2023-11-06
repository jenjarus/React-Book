import { ChangeEventHandler, FC, KeyboardEventHandler, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setQuery } from "../../redux/search";
import { clearDataBooks } from "../../redux/books";
import { ReactComponent as IconSearch } from "../../assets/search.svg";
import "./InputSearch.scss";

export const InputSearch: FC = () => {
  const dispatch = useAppDispatch();
  const query: string = useAppSelector((store) => store.search.query);
  const [value, setValue] = useState<string>(query);
  const [isError, setIsError] = useState<boolean>(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    setIsError(false);
  };

  const handleSubmit = () => {
    if (value.trim()) {
      const formattedText: string = value.split(" ").join("+");
      dispatch(setQuery(formattedText));
      dispatch(clearDataBooks());
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  const handlerKeyDownInput: KeyboardEventHandler = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="search-input">
      <input
        className={`input${isError ? " error" : ""}`}
        type="text"
        placeholder="Поиск..."
        onChange={handleChange}
        onKeyDown={handlerKeyDownInput}
        value={value}
      />
      <button className="submit" type="button" onClick={handleSubmit}>
        <IconSearch />
      </button>
    </div>
  );
};
