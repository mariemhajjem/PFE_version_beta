import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchingService } from '../service/searching.service';
import { FormationService } from '../../admin/components/services/formation.service';
import { SessionService } from '../service/session.service';
import { NavbarService } from '../service/navbar.service';

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
  bestFormations: any;
  categorie: any;
  selectedLevel: any;
  Categories =  ['Tous','Web','Mobile','Design','Marketing Digital'];
  constructor(private searchService: SearchingService,private formationService:FormationService,private sessionService:SessionService,public nav: NavbarService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results ;
      });
  }
  ngOnInit() {
      this.getAll();
      this.search();
  }
  search() {
  return this.searchService.searchBestFormation().subscribe(data =>{
    this.bestFormations = data;
    console.log(data);
  },
  error => {
    console.log(error);
  })
  }
   selected(){
    this.categorie = this.selectedLevel;
      console.log(this.categorie)
      
    }
  searchRecherche(){
    if(this.categorie==="Tous"){
      this.getAll();
    }else{
    this.searchService.searchByCategorie(this.categorie).subscribe(data =>{
      this.sessions = data;
    })}
  }
  rechercheParCategorie(categorie){
    console.log("Web");
     
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
