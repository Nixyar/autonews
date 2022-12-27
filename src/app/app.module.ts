import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewsPageComponent} from './pages/news-page/news-page.component';
import {NewsItemPageComponent} from './pages/news-item-page/news-item-page.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "@components/header/header.component";
import {ButtonComponent} from "@components/button/button.component";

@NgModule({
  declarations: [
    AppComponent,
    NewsPageComponent,
    NewsItemPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HeaderComponent,
        ButtonComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
