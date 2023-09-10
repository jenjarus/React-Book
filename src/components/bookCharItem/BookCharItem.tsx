import React, { FC } from "react";
import "./BookCharItem.scss";

interface IBookCharItem {
  title: string;
  value: string;
  classModif?: string;
}

export const BookCharItem: FC<IBookCharItem> = ({ title, value, classModif }) => {
  const fullClassModif: string = classModif ? " book-top__char--" + classModif : "";

  return (
    <div className={`book-top__char${fullClassModif}`}>
      <p className="book-top__char-title">{title}</p>
      <p className="book-top__char-value">{value}</p>
    </div>
  );
};
