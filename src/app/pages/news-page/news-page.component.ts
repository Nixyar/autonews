import {Component, HostListener, OnInit} from '@angular/core';
import {NewsApi} from "@api/news.api";
import {take} from "rxjs";
import {INewsList, INewsListResponse} from "@interfaces/news.interface";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  newsCount: number = 1;
  maxCountNews: number = 1;
  newsLists: INewsList[] | [] = [];

  @HostListener("window:scroll", [])
  onScroll(): void {
    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight, document.body.offsetHeight,
      document.documentElement.offsetHeight, document.body.clientHeight,
      document.documentElement.clientHeight
    );

    if (window.scrollY + 1 >= scrollHeight - innerHeight && this.maxCountNews > this.newsLists.length) {
      this.getNews();
    }
  }

  constructor(private newsApi: NewsApi) {
    this.newsLists = <INewsList[]>JSON.parse(<string>localStorage.getItem('createdNews')) || [];
    this.maxCountNews += this.newsLists.length;
  }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.newsApi.getNewsList(this.newsCount).pipe(take(1)).subscribe({
      next: (news: INewsListResponse) => {
        this.newsLists = [...this.newsLists, ...news.news];
        this.newsCount++;
        if (this.maxCountNews < news.totalCount) {
          this.maxCountNews += news.totalCount;
        }
      },
      error: (error: HttpErrorResponse) => {
        throw new Error(error.error);
      }
    });
  }
}
