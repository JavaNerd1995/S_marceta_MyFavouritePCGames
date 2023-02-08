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
      return of (CONTENT[index])
    }
  
  }
