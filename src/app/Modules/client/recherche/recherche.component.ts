import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { SearchingService } from './searching.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css'],
  providers: [SearchingService]
})
export class RechercheComponent implements OnInit {
 private subscription :Subscription;
  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private searchService: SearchingService) {
    this.subscription= this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results ;
        
      });
     
  }
  ngOnDestroy(){
     this.subscription.unsubscribe();
  }
  ngOnInit() {
  }

}
