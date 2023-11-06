import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { TopPageButton } from "../topPageButton/TopPageButton";
import { BookPage } from "../../pages/bookPage/BookPage";
import { NotFoundPage } from "../../pages/notFoundPage/NotFoundPage";
import { MainPage } from "../../pages/mainPage/MainPage";
import "../../styles/reset.scss";
import "./App.css";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // при переходе на новую страницу, прокручивать на самый верх
  }, [pathname]);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <TopPageButton />
    </div>
  );
}

export default App;
