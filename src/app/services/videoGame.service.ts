import { Injectable, Type } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INVALIDGAME, listOfGames } from '../data/mock-content';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class VideoGameService {
  
  constructor() { }

  getContent(): Observable<IContent[]> {
    return of(listOfGames);
  }

  getContentItem(index: number): Observable<IContent> {
    console.warn("Got to get content item");
    let videoGameFound: IContent | undefined;
    for (let i = 0; i < listOfGames.length; i++){
      if (listOfGames[i].id == index) {
        videoGameFound = listOfGames[i];
        break;
      }
    }
    if (!videoGameFound) { 
      return of(INVALIDGAME);
    }
    console.warn("Got the item", videoGameFound);
    return of(videoGameFound);
  }

  addContentItem(item: IContent): Observable<IContent[]>{
    if (listOfGames.find((game: IContent) => game.id === item.id) == undefined)
    {
      listOfGames.push(item);
    }
    return of(listOfGames);
  }

  updateContentItem(item: IContent): Observable<IContent[]>{
    let indexOfGameToUpdate = listOfGames.findIndex((game: IContent) => {
      // return if we found it or not. true if found, false if not
      return game.id === item.id;
    });
    if (indexOfGameToUpdate !== -1) {
      // only update it if the findIndex method actually found the item with that id
      // you can read more about findIndex here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
      listOfGames[indexOfGameToUpdate] = item;
    }
    return of(listOfGames);
  }

  deleteContentItem(index: number): Observable<IContent> {
    let videoGameFound: IContent | undefined;
    for (let i = 0; i < listOfGames.length; i++){
      if (listOfGames[i].id === index) {
        videoGameFound = listOfGames[i];
        delete listOfGames[i];
        console.log("Did the game get deleted? ", listOfGames);
        break;
      }
    }
    if (!videoGameFound) { // never found a valid game
      return of(INVALIDGAME);
    }
    return of(videoGameFound);
  }


}
  
