import React, { FC } from "react";
import { BlockSearch } from "../../components/blockSearch/BlockSearch";
import { BookCards } from "../../components/bookCards/BookCards";
import "./MainPage.scss";

export const MainPage: FC = () => {
  return (
    <>
      <BlockSearch />
      <BookCards />
    </>
  );
};
