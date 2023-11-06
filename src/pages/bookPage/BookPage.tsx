import React, { FC, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { NotFoundPage } from "../notFoundPage/NotFoundPage";
import { BookCharItem } from "../../components/bookCharItem/BookCharItem";
import { Loading } from "../../components/loading/Loading";
import { ReactComponent as IconArrowLeft } from "../../assets/arrow-left.svg";
import "./BookPage.scss";
import { fetchBook } from "../../redux/book";

export const BookPage: FC = () => {
  const params = useParams();
  const id: string = params.id || "";

  const dispatch = useAppDispatch();
  const dataBook = useAppSelector((state) => state.book);

  useEffect(() => {
    if (id) dispatch(fetchBook(id));
  }, [dispatch, id]);

  return dataBook.isError ? (
    <NotFoundPage />
  ) : (
    <div className="book-page">
      {dataBook.isLoading ? <Loading /> : <></>}
      {!!dataBook ? (
        <div className="book-page__return">
          <div className="container">
            <NavLink to="/" className="book-page__return-link">
              <IconArrowLeft />
              Вернуться назад
            </NavLink>
          </div>
        </div>
      ) : (
        <></>
      )}

      {!!dataBook ? (
        <section className="book-top">
          <div className="container">
            <div className="book-top__wrapper">
              {!!dataBook.volumeInfo.imageLinks?.medium ? (
                <div className="book-top__img">
                  <img
                    src={dataBook.volumeInfo.imageLinks.medium}
                    alt={dataBook.volumeInfo.title}
                  />
                </div>
              ) : (
                <></>
              )}
              <div className="book-top__info">
                <div className="book-top__title">{dataBook.volumeInfo.title}</div>
                {!!dataBook.volumeInfo.categories ? (
                  <BookCharItem
                    title="Категории"
                    value={dataBook.volumeInfo.categories.join(", ")}
                    classModif="categories"
                  />
                ) : (
                  <></>
                )}
                {!!dataBook.volumeInfo.authors ? (
                  <BookCharItem
                    title="Авторы"
                    value={dataBook.volumeInfo.authors.join(", ")}
                    classModif="authors"
                  />
                ) : (
                  <></>
                )}
                {!!dataBook.volumeInfo.publishedDate ? (
                  <BookCharItem
                    title="Дата публикации"
                    value={dataBook.volumeInfo.publishedDate}
                    classModif="date"
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}

      {!!dataBook && !!dataBook.volumeInfo.description ? (
        <section className="book-description">
          <div className="container">
            <div className="book-description__wrapper">
              <p className="book-description__title">Описание</p>
              <p className="book-description__text">{dataBook.volumeInfo.description}</p>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </div>
  );
};
