import React, { FC } from "react";
import "./Header.scss";

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <span className="header__logo-letter header__logo-letter--blue">G</span>
            <span className="header__logo-letter header__logo-letter--red">o</span>
            <span className="header__logo-letter header__logo-letter--yellow">o</span>
            <span className="header__logo-letter header__logo-letter--blue">g</span>
            <span className="header__logo-letter header__logo-letter--green">l</span>
            <span className="header__logo-letter header__logo-letter--red">e</span>книга
          </div>
        </div>
      </div>
    </header>
  );
};
