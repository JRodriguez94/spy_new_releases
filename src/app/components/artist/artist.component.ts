import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {

  constructor( private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe( params => console.log('Params: ', params))
   }

}
