import { Component, OnInit } from '@angular/core';
import { IContent } from '../models/icontent';
import { videoGameService } from '../services/videoGame';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent  implements OnInit{
  listOfGames: IContent[];
  
  
constructor(private videoGameService: videoGameService) {
this.listOfGames = [];
}

ngOnInit(): void {
  this.videoGameService.getContent().subscribe((IContentArrayOfData: IContent[]) => {
    this.listOfGames = IContentArrayOfData;
  });
}

}

