import {Inject, Injectable, PLATFORM_ID} from "@angular/core";
import {isPlatformBrowser} from "@angular/common";
import {INewsList} from "@interfaces/news.interface";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  newsLists$: BehaviorSubject<INewsList[] | []> = new BehaviorSubject<INewsList[] | []>([]);
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  checkBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  less767Checked(): boolean {
    let is767: boolean = false;

    if (this.checkBrowser()) {
      is767 = document.documentElement.offsetWidth <= 767;
    }

    return is767;
  }
}
