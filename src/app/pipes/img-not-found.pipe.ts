import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgNotFound'
})
export class ImgNotFoundPipe implements PipeTransform {

  transform(images: any[]): string {
    if(!images) 
      return 'assets/img/notfound.jpg'
    
    if(images.length > 0)
      return images[1].url
    else
      return 'assets/img/notfound.jpg'
  }

}
