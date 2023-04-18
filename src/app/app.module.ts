import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentListItemComponent } from './content-list-item/content-list-item.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { FilterIContentPipe } from './filter-icontent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentListItemComponent,
    ContentDetailComponent,
    SearchComponent,
    PageNotFoundComponent,
    TopNavigationComponent,
    ModifyContentComponent,
    FilterIContentPipe
    
  ],
  imports: [
    InMemoryWebApiModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
