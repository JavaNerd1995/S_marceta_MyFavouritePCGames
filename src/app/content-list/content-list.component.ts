import { Component, OnInit } from '@angular/core';
import { IContent } from '../models/icontent';
import { VideoGameService } from '../services/videoGame.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit{
  videoGameArray: IContent[];

  constructor(private videoGameService: VideoGameService) {
    this.videoGameArray = [];
  }

  ngOnInit(): void {
    this.videoGameService.getContent().subscribe((videoGames: IContent[]) => {
      console.log("Getting the game list");
      this.videoGameArray = videoGames;
    });

    let testGameToUpdate: IContent = {
      id: 1, // this means we're replacing WiiSports with this new game, cause it has the same id
      title: "The Last Of Us",
      description: "Some random guy takes on responsibility in a zombie game",
      author: "Naughty Dog",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg",
      type: "zombie",
    };

    


  }
}
