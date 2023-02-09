import { IContent } from '../models/icontent';


export const listOfGames: IContent[] = [{
    id: 1024,
    imgSrc: 'https://hindmoviez.app/wp-content/uploads/2023/01/The-Last-of-Us-Season-1-English.jpg',
    description: '<p>The Last of Us is a 2013 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. Players control Joel, a smuggler tasked with escorting a teenage girl, Ellie, across a post-apocalyptic United States.</p>',
    title: 'the last of us',
    author: 'Sony play-station studios',
    type: ''
  },{
    id: 1025,
    imgSrc: 'https://cdn.wccftech.com/wp-content/uploads/2018/08/dying-light-2-logo.jpg',
    description: '<p>Dying Light 2 Stay Human is a 2022 action role-playing game developed and published by Techland. As a sequel to Dying Light from 2015, the game was released on February 4, 2022 for PlayStation 4, PlayStation 5, Windows, Xbox One, and Xbox Series X/S.</p>',
    title: 'Dying light 2',
    author: 'Techland',
    type: ''
  },{
    id: 1026,
    imgSrc: 'https://hindmoviez.app/wp-content/uploads/2023/01/The-Last-of-Us-Season-1-English.jpg',
    description: '<p>This is the body of the content</p>',
    title: 'the last of us',
    author: 'Sony play-station studios',
    type: ''
  },{
    id: 1027,
    imgSrc: 'https://hindmoviez.app/wp-content/uploads/2023/01/The-Last-of-Us-Season-1-English.jpg',
    description: '<p>This is the body of the content</p>',
    title: 'the last of us',
    author: 'Sony play-station studios',
    type: ''
  },{
    id: 1028,
    imgSrc: 'https://hindmoviez.app/wp-content/uploads/2023/01/The-Last-of-Us-Season-1-English.jpg',
    description: '<p>This is the body of the content</p>',
    title: 'the last of us',
    author: 'Sony play-station studios',
    type: ''
  }
]

  export const INVALIDGAME: IContent = {
    id: -1,
    title: "",
    author: "",
    type: "",
    description: '',
    imgSrc: ''
  };