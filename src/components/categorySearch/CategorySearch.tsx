import React, { FC } from "react";
import { setCategory } from "../../redux/search";
import { clearDataBooks } from "../../redux/books";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { SelectSearch } from "../selectSearch/SelectSearch";
import { IListSearchSelect } from "../../utils/types";
import "./CategorySearch.scss";

const listCategory: IListSearchSelect[] = [
  {
    title: "Все",
    value: "",
  },
  {
    title: "Арт",
    value: "art",
  },
  {
    title: "Биография",
    value: "biography",
  },
  {
    title: "Компьютеры",
    value: "computers",
  },
  {
    title: "История",
    value: "history",
  },
  {
    title: "Медицина",
    value: "medical",
  },
  {
    title: "Поэзия",
    value: "poetry",
  },
];

export const CategorySearch: FC = () => {
  const dispatch = useAppDispatch();
  const currentCategoryValue: string = useAppSelector((store) => store.search.category);

  const handleSelectCategory = (value: string) => {
    dispatch(setCategory(value));
    dispatch(clearDataBooks());
  };

  return (
    <div className="search-category">
      <SelectSearch
        title="Категория"
        data={listCategory}
        currentValue={currentCategoryValue}
        handler={handleSelectCategory}
      />
    </div>
  );
};
