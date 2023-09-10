import { IBookResponse, IBooksResponse } from "./types";
import { STEP_PAGINATION } from "./constants";

export const booksFetch = async (
  query: string,
  startIndex: number,
  orderBy: string,
  category: string
) => {
  const categoryQuery = category?.length ? "+subject:" + category : "";
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}${categoryQuery}&startIndex=${startIndex}&maxResults=${STEP_PAGINATION}&orderBy=${orderBy}&key=${process.env.REACT_APP_KEY_API_GOOGLE_BOOK}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const result: IBooksResponse = await response.json();
  return result;
};

export const bookFetch = async (id: string) => {
  const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.REACT_APP_KEY_API_GOOGLE_BOOK}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const result: IBookResponse = await response.json();
  return result;
};
