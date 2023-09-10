import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { IBooksCard } from "../../utils/types";
import "./BookCard.scss";

interface IBookCard {
  data: IBooksCard;
}

export const BookCard: FC<IBookCard> = ({ data }) => {
  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__img">
          <NavLink to={`/book/${data.id}`}>
            {!!data.volumeInfo.imageLinks?.thumbnail ? (
              <img src={data.volumeInfo.imageLinks.thumbnail} alt={data.volumeInfo.title} />
            ) : (
              <></>
            )}
          </NavLink>
        </div>
        {!!data.volumeInfo.categories ? (
          <div className="card__categories">{data.volumeInfo.categories[0]}</div>
        ) : (
          <></>
        )}
        <NavLink to={`/book/${data.id}`} className="card__title" title={data.volumeInfo.title}>
          {data.volumeInfo.title}
        </NavLink>
        {!!data.volumeInfo.authors ? (
          <div className="card__authors">{data.volumeInfo.authors.join(", ")}</div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
