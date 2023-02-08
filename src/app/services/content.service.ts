import { Injectable, Type } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IContent } from '../models/icontent';
import { CONTENT } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  
  constructor() { }

  getContent(): Observable<IContent[]> {
    return of (CONTENT);
    }
  
    getContentItem(index: number): Observable<IContent> {
      let videoGameFound : IContent = INVALIDGAME;
      for(let i = 0; i < CONTENT.length; i++)
        if (CONTENT)
      return of (CONTENT[index])
    }
    addContentItem(item: IContent): Observable<IContent[]>{
      CONTENT.push(item);
      return of (CONTENT);
    }
  }
