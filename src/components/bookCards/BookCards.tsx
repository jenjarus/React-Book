import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setCountBooks,
  setCountPage,
  setDataBooks,
  setFoundResults,
  setLoading, setRequest,
} from "../../redux/search";
import { STEP_PAGINATION } from "../../utils/constants";
import { IBooksCard, IBooksResponse } from "../../utils/types";
import { BookCard } from "../bookCard/BookCard";
import { Loading } from "../loading/Loading";
import { booksFetch } from "../../utils/fetch";
import "./BookCards.scss";

export const BookCards: FC = () => {
  const dispatch = useAppDispatch();
  const query: string = useAppSelector((store) => store.search.query);
  const countPage: number = useAppSelector((store) => store.search.countPage);
  const countBooks: number = useAppSelector((store) => store.search.countBooks);
  const sortingQuery: string = useAppSelector((store) => store.search.sorting);
  const categoryQuery: string = useAppSelector((store) => store.search.category);
  const foundResults: number = useAppSelector((store) => store.search.foundResults);
  const loading: boolean = useAppSelector((store) => store.search.loading);
  const isRequest: boolean = useAppSelector((store) => store.search.isRequest);
  const dataBooks: IBooksCard[] = useAppSelector((store) => store.search.dataBooks);
  const nextCountBooks: number = countBooks + STEP_PAGINATION;

  const booksData = async () => {
    dispatch(setLoading(true));
    try {
      const { items, totalItems }: IBooksResponse = await booksFetch(
        query,
        countBooks,
        sortingQuery,
        categoryQuery
      );
      if (!!items) {
        dispatch(setDataBooks(items));
        dispatch(setFoundResults(totalItems));
      }
    } catch (err) {
      console.log(err);
    }
    dispatch(setLoading(false));
  };

  const handleClickMore = () => {
    if (foundResults > nextCountBooks) {
      dispatch(setCountPage(countPage + 1));
      dispatch(setCountBooks(nextCountBooks));
      dispatch(setRequest(true));
    }
  };

  useEffect(() => {
    (!!query && isRequest) && booksData();
    dispatch(setRequest(false));
  }, [isRequest]);

  return (
    <section className="section-cards">
      <div className="container">
        {!dataBooks?.length && loading ? <Loading /> : <></>}

        {!!foundResults ? (
          <div className="section-cards__results">Найдено {foundResults} результатов</div>
        ) : (
          <></>
        )}

        {!!dataBooks?.length ? (
          <>
            <div className="cards">
              {dataBooks.map((el) => (
                <BookCard key={el.id} data={el} />
              ))}
            </div>
            {loading ? <Loading /> : <></>}
            {foundResults > nextCountBooks ? (
              <div className="cards__more">
                <button className="btn" onClick={handleClickMore}>
                  Загрузить еще
                </button>
              </div>
            ) : (
              <></>
            )}
          </>
        ) : !!query.length && !loading ? (
          <div className="section-cards__not-found">Не найдено</div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};
