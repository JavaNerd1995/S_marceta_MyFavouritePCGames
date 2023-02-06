import { Component } from '@angular/core';
import { IContent } from '../models/icontent';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})


export class mockcontent {
listOfGames: IContent[];

constructor() {
  this.listOfGames = [];
  this.listOfGames.push({
    id: 1024,
    imageSrc: 'https://hindmoviez.app/wp-content/uploads/2023/01/The-Last-of-Us-Season-1-English.jpg',
    description: '<p>This is the body of the content</p>',
    name: 'the last of us',
    author: 'Sony play-station studios',
    type: ''
  },{
    id: 1025,
    imageSrc: 'https://hindmoviez.app/wp-content/uploads/2023/01/The-Last-of-Us-Season-1-English.jpg',
    description: '<p>This is the body of the content</p>',
    name: 'the last of us',
    author: 'Sony play-station studios',
    type: ''
  },{
    id: 1026,
    imageSrc: 'https://hindmoviez.app/wp-content/uploads/2023/01/The-Last-of-Us-Season-1-English.jpg',
    description: '<p>This is the body of the content</p>',
    name: 'the last of us',
    author: 'Sony play-station studios',
    type: ''
  },{
    id: 1027,
    imageSrc: 'https://hindmoviez.app/wp-content/uploads/2023/01/The-Last-of-Us-Season-1-English.jpg',
    description: '<p>This is the body of the content</p>',
    name: 'the last of us',
    author: 'Sony play-station studios',
    type: ''
  },{
    id: 1028,
    imageSrc: 'https://hindmoviez.app/wp-content/uploads/2023/01/The-Last-of-Us-Season-1-English.jpg',
    description: '<p>This is the body of the content</p>',
    name: 'the last of us',
    author: 'Sony play-station studios',
    type: ''
  });
}
}
