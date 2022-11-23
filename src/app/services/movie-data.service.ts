import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  constructor(private http: HttpClient) {}
  //   nowPlaying(){
  // return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17')
  //   }

  //   topRated(){
  //     return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=15e383204c1b8a09dbfaaa4c01ed7e17')
  //       }

  //       trending(){
  //         return this.http.get('https://api.themoviedb.org/3/trending/all/day?api_key=15e383204c1b8a09dbfaaa4c01ed7e17')
  //           }
  api(path: any) {
    return this.http.get(
      'https://api.themoviedb.org/3/' +
        path +
        '?api_key=15e383204c1b8a09dbfaaa4c01ed7e17'
    );
  }
}
