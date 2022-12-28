import {Component, OnInit} from '@angular/core';
import {NewsApi} from "@api/news.api";
import {ActivatedRoute} from "@angular/router";
import {INewsItem} from "@interfaces/news.interface";

@Component({
  selector: 'app-news-item-page',
  templateUrl: './news-item-page.component.html',
  styleUrls: ['./news-item-page.component.scss']
})
export class NewsItemPageComponent implements OnInit {
  newsInfo: INewsItem | null = null;
  constructor(private activateRoute: ActivatedRoute, private newsApi: NewsApi) {
  }

  ngOnInit() {
    this.newsApi.getNews(this.activateRoute.snapshot.params['id']).subscribe((news: INewsItem) => this.newsInfo = news)
  }
}
