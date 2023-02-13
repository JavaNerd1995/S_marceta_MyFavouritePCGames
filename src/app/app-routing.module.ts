import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  
    { path: "/content", component: ContentListComponent },
    { path: "/content", component: ContentListComponent},
    { path: "/content/##", component: ContentDetailComponent },
    { path: "/search", component: SearchComponent }
    ];

@NgModule({
  // this hooks up our routes so they work
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
  
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
  
  
})
export class AppRoutingModule { }
