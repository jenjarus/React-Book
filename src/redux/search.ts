import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISearchReducer {
  query: string;
  sorting: string;
  category: string;
}

const initialState: ISearchReducer = {
  query: "",
  sorting: "relevance",
  category: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state: ISearchReducer, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setSorting: (state: ISearchReducer, action: PayloadAction<string>) => {
      state.sorting = action.payload;
    },
    setCategory: (state: ISearchReducer, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const {
  setQuery,

  setSorting,
  setCategory,
} = searchSlice.actions;

export default searchSlice.reducer;
