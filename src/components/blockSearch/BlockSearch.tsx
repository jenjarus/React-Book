import React, { FC } from "react";
import { InputSearch } from "../inputSearch/InputSearch";
import { SortingSearch } from "../sortingSearch/SortingSearch";
import { CategorySearch } from "../categorySearch/CategorySearch";
import "./BlockSearch.scss";

export const BlockSearch: FC = () => {
  return (
    <section className="section-search">
      <div className="container">
        <div className="section-search__wrapper">
          <InputSearch />
          <div className="section-search__group">
            <div className="section-search__group-item">
              <SortingSearch />
            </div>
            <div className="section-search__group-item">
              <CategorySearch />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
