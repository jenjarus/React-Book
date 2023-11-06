export interface IVolumeInfo {
  title: string;
  authors: string[];
  categories: string[];
  imageLinks: {
    thumbnail: string;
  };
}

export interface IBooksCard {
  id: string;
  volumeInfo: IVolumeInfo;
}
export interface IBooksResponse {
  items: IBooksCard[];
  totalItems: number;
}

export interface IBooksState {
  items: IBooksCard[];
  totalItems: number;
  countBooks: number;
  isError: boolean;
  isLoading: boolean;
}

export interface IBookResponse {
  volumeInfo: IVolumeInfo & {
    description: string;
    publishedDate: string;
    imageLinks: {
      medium: string;
      small: string;
    };
  };
}

export interface IBookState {
  volumeInfo: IVolumeInfo & {
    description: string;
    publishedDate: string;
    imageLinks: {
      medium: string;
      small: string;
    };
  };
  isError: boolean;
  isLoading: boolean;
}

export interface IListSearchSelect {
  title: string;
  value: string;
}
