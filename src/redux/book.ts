import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookResponse, IBookState } from "../utils/types";

export const fetchBook = createAsyncThunk<IBookResponse, string>("book/fetchBook", async (id) => {
  const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.REACT_APP_KEY_API_GOOGLE_BOOK}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return await response.json();
});

const initialState: IBookState = {
  volumeInfo: {
    title: "",
    authors: [""],
    categories: [""],
    description: "",
    publishedDate: "",
    imageLinks: {
      thumbnail: "",
      medium: "",
      small: "",
    },
  },
  isError: false,
  isLoading: false,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchBook.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchBook.fulfilled, (state, action: PayloadAction<IBookResponse>) => {
        state.isLoading = false;
        state.isError = false;
        state.volumeInfo = action.payload.volumeInfo;
      });
  },
});

export default bookSlice.reducer;
