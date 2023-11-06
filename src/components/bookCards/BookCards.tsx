import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setCountBooks } from "../../redux/books";
import { fetchBooks } from "../../redux/books";
import { STEP_PAGINATION } from "../../utils/constants";
import { BookCard } from "../bookCard/BookCard";
import { Loading } from "../loading/Loading";
import "./BookCards.scss";

export const BookCards: FC = () => {
  const dispatch = useAppDispatch();
  const { items: books, totalItems, isError, isLoading } = useAppSelector((state) => state.books);
  const query: string = useAppSelector((store) => store.search.query);
  const countBooks: number = useAppSelector((store) => store.books.countBooks);
  const sortingQuery: string = useAppSelector((store) => store.search.sorting);
  const categoryQuery: string = useAppSelector((store) => store.search.category);
  const nextCountBooks: number = countBooks + STEP_PAGINATION;
  const [isEnableQuery, setIsEnableQuery] = useState(false); // Активация функции fetchBooks

  const handleClickMore = () => {
    if (totalItems > nextCountBooks) {
      dispatch(setCountBooks(nextCountBooks));
    }
  };

  useEffect(() => {
    setIsEnableQuery(true);
  }, []);

  useEffect(() => {
    if (isEnableQuery && query) {
      const objPropsBooks = {
        query: query,
        startIndex: countBooks,
        orderBy: sortingQuery,
        category: categoryQuery,
      };
      dispatch(fetchBooks(objPropsBooks));
    }
  }, [dispatch, query, countBooks, sortingQuery, categoryQuery]);

  return (
    <section className="section-cards">
      <div className="container">
        {!!totalItems ? (
          <div className="section-cards__results">Найдено {totalItems} результатов</div>
        ) : (
          <></>
        )}
        {!!isError ? (
          <div className="section-cards__not-found">Не найдено</div>
        ) : !!books.length ? (
          <>
            <div className="cards">
              {books.map((el) => (
                <BookCard key={el.id} data={el} />
              ))}
            </div>
            {totalItems > nextCountBooks ? (
              <div className="cards__more">
                <button className="btn" onClick={handleClickMore}>
                  Загрузить еще
                </button>
              </div>
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
        {isLoading ? <Loading /> : <></>}
      </div>
    </section>
  );
};
