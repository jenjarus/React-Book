export interface IVolumeInfo {
  title: string;
  authors?: string[];
  categories?: string[];
  imageLinks?: {
    thumbnail?: string;
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

export interface IBookResponse {
  volumeInfo: IVolumeInfo & {
    description?: string;
    publishedDate: string;
    imageLinks?: {
      medium?: string;
      small?: string;
    };
  };
}

export interface IListSearchSelect {
  title: string;
  value: string;
}
