import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../../admin/components/services/partenaire.service';

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css']
})
export class PartenairesComponent implements OnInit {

  constructor(private partenaireService: PartenaireService ) { }
partenaires :any;
  ngOnInit() {
    this.getAll();
  }
getAll(){
  return this.partenaireService.getDemandes().subscribe(
   data =>  {
     this.partenaires = data;
    },
   error => {
     console.log(error)
    }
  );
}
}
