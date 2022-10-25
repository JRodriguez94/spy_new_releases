import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];
  loading: boolean = true;

  constructor( private spotify: SpotifyService ) { }

  ngOnInit(): void {
    this.spotify.getNewReleases()
      .subscribe( (data: any) => {
        this.newSongs = data;
        this.loading = false;
      }, error => this.tokenError(error))
  }

  tokenError(error: any) {
    let errorObj = error.error.error;
    if(errorObj.status == 401) {
      alert('Valió madre :c ')
    }
  }

}
