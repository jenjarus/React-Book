import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { TopPageButton } from "../topPageButton/TopPageButton";
import { BookPage } from "../../pages/bookPage/BookPage";
import { NotFoundPage } from "../../pages/notFoundPage/NotFoundPage";
import { MainPage } from "../../pages/mainPage/MainPage";
import "../../styles/reset.scss";
import "./App.css";

function App() {
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
