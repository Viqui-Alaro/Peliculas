import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getFeature(){
    return this.http.get('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2020-05-01&primary_release_date.lte=2020-05-22&api_key=8a7574825e96dd03197d94bce95e845f&language=es&include_image_language=es');
  }

  
}
