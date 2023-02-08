import { Component, OnInit } from '@angular/core';
import { IContent } from './models/icontent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  singlegame?: IContent;
  title?: string;

  constructor(private videoGameService: VideoGameService) {
    this.title = 'my favourite pc games';
  }

  ngOnInit(): void{
    this.videoGameService.getContentItem(2).subscribe(videoGame: IContent) => {
      this.singlegame = videoGame;
      
    }
    }
    
}