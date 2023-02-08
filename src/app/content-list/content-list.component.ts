import { Component, OnInit } from '@angular/core';
import { IContent } from '../models/icontent';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent  implements OnInit{
  listOfGames: IContent[];
  
  
constructor(private contentService: ContentService) {
this.listOfGames = [];
}

ngOnInit(): void {
  this.contentService.getContent().subscribe((IContentArrayOfData: IContent[]) => {
    this.listOfGames = IContentArrayOfData;
  });
}

}

