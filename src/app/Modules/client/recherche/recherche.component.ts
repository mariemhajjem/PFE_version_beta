import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchingService } from './searching.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css'],
  providers: [SearchingService]
})
export class RechercheComponent implements OnInit {

  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private searchService: SearchingService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results ;
        
      });
     
  }
  ngAfterContentInit(){
     this.results= null;
  }
  ngOnInit() {
  }

}
