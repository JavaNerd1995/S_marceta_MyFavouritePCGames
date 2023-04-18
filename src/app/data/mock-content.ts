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
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/af/The_Division_2_art.jpg/220px-The_Division_2_art.jpg',
    description: "<p>Tom Clancy's The Division 2 is an online-only action role-playing video game developed by Massive Entertainment and published by Ubisoft. The sequel to Tom Clancy's The Division (2016), it is set in a near-future Washington, D.C.</p>",
    title: 'Tom Clancys the division',
    author: 'Massive entertainment',
    type: ''
  },{ 
    id: 1027,
    imgSrc: 'https://cdn.supersoluce.com/file/docs/docid_50f633a58f152fee45000051/elemid_4ee9d6ec0a2fe93f0e00000c/the-witcher-3-wild-hunt-pc.jpg',
    description: '<p>The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by CD Projekt. It is the sequel to the 2011 game The Witcher 2: Assassins of Kings and the third game in The Witcher video game series.</p>',
    title: 'The Witcher 3',
    author: 'CD Projekt Red',
    type: ''
  },{
    id: 1028,
    imgSrc: 'https://i.redd.it/2afuemjc8ek31.jpg',
    description: '<p>Cyberpunk 2077 is a 2020 action role-playing video game developed by CD Projekt Red and published by CD Projekt. Set in Night City, an open world set in the Cyberpunk universe, players assume the role of a customisable mercenary known as V, who can acquire skills in hacking and machinery with options for melee and ranged combat.</p>',
    title: 'CyberPunk 2077',
    author: 'Sony play-station studios',
    type: ''
  },{
    id: 1028,
    imgSrc: 'https://i.redd.it/2afuemjc8ek31.jpg',
    description: '<p>Cyberpunk 2077 is a 2020 action role-playing video game developed by CD Projekt Red and published by CD Projekt. Set in Night City, an open world set in the Cyberpunk universe, players assume the role of a customisable mercenary known as V, who can acquire skills in hacking and machinery with options for melee and ranged combat.</p>',
    title: 'CyberPunk 2077',
    author: 'Sony play-station studios',
    type: ''
  },{
    id: 1028,
    imgSrc: 'https://i.redd.it/2afuemjc8ek31.jpg',
    description: '<p>Cyberpunk 2077 is a 2020 action role-playing video game developed by CD Projekt Red and published by CD Projekt. Set in Night City, an open world set in the Cyberpunk universe, players assume the role of a customisable mercenary known as V, who can acquire skills in hacking and machinery with options for melee and ranged combat.</p>',
    title: 'CyberPunk 2077',
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