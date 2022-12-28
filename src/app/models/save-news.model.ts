import {IFormDataSaveNews} from "@interfaces/news.interface";

export class SaveNewsModel {
  categoryType: 'Локальная';
  description: string;
  fullUrl: null;
  id: null;
  publishedDate: Date;
  title: string;
  titleImageUrl: string;
  url: null;

  constructor(formData: IFormDataSaveNews) {
    this.categoryType = 'Локальная';
    this.description = formData.description;
    this.fullUrl = null;
    this.id = null;
    this.publishedDate = new Date();
    this.title = formData.title;
    this.titleImageUrl = formData.titleImageUrl;
    this.url = null;
  }
}
