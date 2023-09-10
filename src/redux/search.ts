import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBooksCard } from "../utils/types";

interface ISearchReducer {
  dataBooks: IBooksCard[];
  query: string;
  foundResults: number;
  countBooks: number;
  countPage: number;
  sorting: string;
  category: string;
  loading: boolean;
  isRequest: boolean;
}

const initialState: ISearchReducer = {
  dataBooks: [],
  query: "",
  foundResults: 0,
  countBooks: 0,
  countPage: 0,
  sorting: "relevance",
  category: "",
  loading: false,
  isRequest: false,
};

const resetBooksState = (state: ISearchReducer) => {
  state.dataBooks = [];
  state.foundResults = 0;
  state.countBooks = 0;
  state.countPage = 0;
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setDataBooks: (state: ISearchReducer, action: PayloadAction<IBooksCard[]>) => {
      state.dataBooks = [...state.dataBooks, ...action.payload];
    },
    clearDataBooks: (state: ISearchReducer) => {
      resetBooksState(state);
    },
    setQuery: (state: ISearchReducer, action: PayloadAction<string>) => {
      state.query = action.payload;
      resetBooksState(state);
    },
    setFoundResults: (state: ISearchReducer, action: PayloadAction<number>) => {
      state.foundResults = action.payload;
    },
    setCountBooks: (state: ISearchReducer, action: PayloadAction<number>) => {
      state.countBooks = action.payload;
    },
    setCountPage: (state: ISearchReducer, action: PayloadAction<number>) => {
      state.countPage = action.payload;
    },
    setSorting: (state: ISearchReducer, action: PayloadAction<string>) => {
      state.sorting = action.payload;
      resetBooksState(state);
    },
    setCategory: (state: ISearchReducer, action: PayloadAction<string>) => {
      state.category = action.payload;
      resetBooksState(state);
    },
    setLoading: (state: ISearchReducer, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setRequest: (state: ISearchReducer, action: PayloadAction<boolean>) => {
      state.isRequest = action.payload;
    },
  },
});

export const {
  setDataBooks,
  clearDataBooks,
  setQuery,
  setFoundResults,
  setCountBooks,
  setCountPage,
  setSorting,
  setCategory,
  setLoading,
  setRequest,
} = searchSlice.actions;

export default searchSlice.reducer;
