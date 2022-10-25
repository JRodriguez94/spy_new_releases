import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() items: any[] = [];

  constructor( private router: Router ) { }

  goToArtist(item: any) {
    console.log("ITEM: ", item)
    let url: string;
    if(item.type === 'artist') {
      url = item.id;
    } else {
      url = item.artists[0].id
    }
    console.log("URL: ", url)
    this.router.navigate(['/artist', url]);
  }
}
