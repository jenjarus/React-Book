import React, { FC } from "react";
import { setSorting } from "../../redux/search";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { clearDataBooks } from "../../redux/books";
import { IListSearchSelect } from "../../utils/types";
import { SelectSearch } from "../selectSearch/SelectSearch";
import "./SortingSearch.scss";

const listSorting: IListSearchSelect[] = [
  {
    title: "По релевантности",
    value: "relevance",
  },
  {
    title: "По новизне",
    value: "newest",
  },
];

export const SortingSearch: FC = () => {
  const dispatch = useAppDispatch();
  const currentSortingValue: string = useAppSelector((store) => store.search.sorting);

  const handleSelectSorting = (value: string) => {
    dispatch(setSorting(value));
    dispatch(clearDataBooks());
  };

  return (
    <div className="search-sorting">
      <SelectSearch
        title="Сортировать по"
        data={listSorting}
        currentValue={currentSortingValue}
        handler={handleSelectSorting}
      />
    </div>
  );
};
