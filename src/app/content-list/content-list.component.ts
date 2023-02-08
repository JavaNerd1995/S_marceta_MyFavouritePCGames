import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentService: any;
  content: any;
  
  ngOnInit() {
    this.contentService.getContent().subscribe((content: any
      )    => this.content = content);
    }

}

