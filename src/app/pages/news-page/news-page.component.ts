import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {NewsApi} from "@api/news.api";
import {distinctUntilChanged, take} from "rxjs";
import {INewsList, INewsListResponse} from "@interfaces/news.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {GlobalService} from "../../services/global.service";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit, OnDestroy {
  newsLists: INewsList[] | [] = [];
  newsCount: number = 1;

  @HostListener("window:scroll", [])
  onScroll(): void {
    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight, document.body.offsetHeight,
      document.documentElement.offsetHeight, document.body.clientHeight,
      document.documentElement.clientHeight
    );

    if (window.scrollY + 1 >= scrollHeight - innerHeight) {
      this.getNews();
    }
  }

  constructor(private newsApi: NewsApi, public globalService: GlobalService) {
    this.globalService.newsLists$.next(<INewsList[]>JSON.parse(<string>localStorage.getItem('createdNews')) || [])
  }

  ngOnInit() {
    this.getNews();
    this.globalService.newsLists$.pipe(distinctUntilChanged()).subscribe((news: INewsList[] | []) => {
      this.newsLists = news;
    });
  }

  ngOnDestroy() {
    this.globalService.newsLists$.unsubscribe();
  }

  getNews() {
    this.newsApi.getNewsList(this.newsCount).pipe(take(1)).subscribe({
      next: (news: INewsListResponse) => {
        this.globalService.newsLists$.next([...this.newsLists, ...news.news]);
        this.newsCount++;
      },
      error: (error: HttpErrorResponse) => {
        throw new Error(error.error);
      }
    });
  }
}
