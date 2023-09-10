import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./NotFoundPage.scss";

export const NotFoundPage: FC = () => {
  return (
    <section className="not-found__section">
      <div className="container">
        <h1>404 Страница не найдена :(</h1>
        <p>Упс, страница не найдена, вернитесь на главную страницу</p>
        <p className="not-found__return">
          <NavLink to="/" className="btn">
            Вернуться на главную
          </NavLink>
        </p>
      </div>
    </section>
  );
};
