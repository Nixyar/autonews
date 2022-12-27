import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {INewsListResponse} from "@interfaces/news.interface";

@Injectable({
  providedIn: 'root'
})

export class NewsApi {
  baseUrl: string = 'https://webapi.autodoc.ru/api/news';
  constructor(private http: HttpClient) {
  }

  getNewsList(pageNumber: number): Observable<INewsListResponse> {
    return this.http.get<INewsListResponse>(`${this.baseUrl}/${pageNumber}/10`);
  }

  getNews(newsName: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/item/avto-novosti/${newsName}`);
  }
}
