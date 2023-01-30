import { Component, Input, OnInit } from '@angular/core';
import { IContent } from '../models/icontent';

@Component({
  selector: 'app-content-list-item',
  templateUrl: './content-list-item.component.html',
  styleUrls: ['./content-list-item.component.scss']
})
export class ContentListItemComponent implements OnInit {
    @Input() contentItem?: IContent;
    constructor(){
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
    
}
