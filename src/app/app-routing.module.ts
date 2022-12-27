import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsPageComponent} from "./pages/news-page/news-page.component";
import {NewsItemPageComponent} from "./pages/news-item-page/news-item-page.component";

const routes: Routes = [
  { path: '', component: NewsPageComponent},
  { path: ':id', component: NewsItemPageComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
