import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ContentDetailComponent } from '../content-detail/content-detail.component';
import { ContentListComponent } from '../content-list/content-list.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent {


  
}
const routes: Routes = [
  {
  path: "",
  redirectTo: "/content",
  pathMatch: "full",
  },
  { path: "contentList", component: ContentListComponent },
  { path: "content/:id", component: ContentDetailComponent
  },
  { path: "**", component: PageNotFoundComponent }
  ];
  