import { Pipe, PipeTransform } from '@angular/core';
import { IContent } from './models/icontent';

@Pipe({
  name: 'filterIContent'
})
export class FilterIContentPipe implements PipeTransform {

  transform(contentList: IContent[]) {
    return contentList.filter(c => c.tags?.length);
    }
    

}
