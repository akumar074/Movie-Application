// Importing Liberaries, Modules and Components
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// Injectavle OmdbService Class
@Injectable()
export class OmdbService {
  constructor(private http: Http) { }
  // Search Methiod to Get Movie Data from OMDB Api
  search(query: string) {
  return this.http.get('http://www.omdbapi.com/?s=' + query)
                    .map((response) => response.json().Search)
                    .catch((error) => { return Observable.throw(error); });
  }
}
