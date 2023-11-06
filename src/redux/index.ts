import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search";
import bookSlice from "./book";
import booksSlice from "./books";

const store = configureStore({
  reducer: {
    search: searchSlice,
    book: bookSlice,
    books: booksSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
