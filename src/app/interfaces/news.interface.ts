export interface INewsListResponse {
  news: INewsList[];
  totalCount: number;
}

export interface INewsList {
  categoryType: string;
  description: string;
  fullUrl: string | null;
  id: number | null;
  publishedDate: string | Date;
  title: string;
  titleImageUrl: string;
  url: string | null;
}
