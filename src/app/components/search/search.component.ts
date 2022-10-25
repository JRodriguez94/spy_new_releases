import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean = false;


  constructor(private spotify: SpotifyService) { }

  search(key: string){
    if(key.length > 0) {
      this.loading = true;
      this.spotify.search(key).subscribe( (data: any) => {
        if(data) {
          this.artists = data;
          this.loading = false;
          console.log('Resultado de la busqueda: ', this.artists[0])
        }
      })
    }
  }

  goToArtist(url: string) {
    console.log('url: ', url)
    this.spotify.getExternalUrl(url)
      .subscribe( data => {
        console.log('External: ', data)
      })
  }
}
