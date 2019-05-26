import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap, map
} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SearchingService {

  
  baseUrl: string = 'http://localhost:3000/recherche';
  queryUrl: string = '?q=';

  constructor(private http: HttpClient) { }

  search(terms: Observable<string>) {
    return terms.pipe(
       debounceTime(400),
       distinctUntilChanged(),
       switchMap(term => this.searchEntries(term)));
  }

  searchEntries(term) {
    return this.http.get(this.baseUrl+'/form' + this.queryUrl + term) ;
        
  }
  
  searchBestFormation(){
    return this.http.get(this.baseUrl+'/bestformation');
  }
  searchByCategorie(categorie){
    return this.http.get(this.baseUrl+'/ParCategorie' + this.queryUrl + categorie) ;
  }
}