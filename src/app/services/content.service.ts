import { Injectable, Type } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  
  getContent() : Observable<Content[]>{
    return CONTENT;
  }


  constructor() {
    
   }
  }
