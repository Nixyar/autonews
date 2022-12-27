export interface INewsListResponse {
  news: INewsList[];
  totalCount: number;
}

export interface INewsList {
  categoryType: string;
  description: string;
  fullUrl: string;
  id: number;
  publishedDate: string;
  title: string;
  titleImageUrl: string;
  url: string;
}
