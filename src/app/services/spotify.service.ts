import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  token = `Bearer ${environment.token}`

  headers = new HttpHeaders({
    'Authorization': this.token
  })

  constructor( private http: HttpClient ) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    return this.http.get(url, { headers: this.headers } )
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=50')
        .pipe( map( (data: any) => data.albums.items));
  }

  search(key: string) {
    return this.getQuery(`search?q=${key}&type=artist&limit=25`)
        .pipe( map( ( data: any) => data.artists.items))
  }

  getExternalUrl(url: string) {
    return this.getQuery(url);
  }
}
