import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchingService } from '../service/searching.service';
import { FormationService } from '../../admin/components/services/formation.service';

@Component({
  selector: 'app-liste-formations',
  templateUrl: './liste-formations.component.html',
  styleUrls: ['./liste-formations.component.css'],
  providers: [SearchingService]
})
export class ListeFormationsComponent implements OnInit {

  results: Object;
  searchTerm$ = new Subject<string>();
  sessions: any;
  constructor(private searchService: SearchingService,private formationService:FormationService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results ;
      });
  }
  ngOnInit() {
      this.getAll();
  }
  search() {
  }
 
 
  getAll(){
    return this.formationService.getBusinesses().subscribe(data =>
      {
        this.sessions = data; 
      },
      error => {
        console.log(error);
      }
      )
  }
}