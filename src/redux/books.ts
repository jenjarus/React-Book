import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STEP_PAGINATION } from "../utils/constants";
import { IBooksResponse, IBooksState } from "../utils/types";

interface IFetchBooks {
  query: string;
  startIndex: number;
  orderBy: string;
  category: string;
}

export const fetchBooks = createAsyncThunk<IBooksResponse, IFetchBooks>(
  "books/fetchBooks",
  async ({ query, startIndex, orderBy, category }) => {
    const categoryQuery = category?.length ? "+subject:" + category : "";
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}${categoryQuery}&startIndex=${startIndex}&maxResults=${STEP_PAGINATION}&orderBy=${orderBy}&key=${process.env.REACT_APP_KEY_API_GOOGLE_BOOK}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return await response.json();
  }
);

const resetBooksState = (state: IBooksState) => {
  state.items = [];
  state.countBooks = 0;
};

const initialState: IBooksState = {
  totalItems: 0,
  items: [],
  countBooks: 0,
  isError: false,
  isLoading: false,
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    clearDataBooks: (state: IBooksState) => {
      resetBooksState(state);
    },
    setCountBooks: (state: IBooksState, action: PayloadAction<number>) => {
      state.countBooks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<IBooksResponse>) => {
        state.isLoading = false;
        state.isError = false;
        if (action.payload.items) {
          state.totalItems = action.payload.totalItems;
          state.items = [...state.items, ...action.payload.items];
        }
      });
  },
});

export const { clearDataBooks, setCountBooks } = booksSlice.actions;

export default booksSlice.reducer;
