import { Router } from '@angular/router';
import { FormationService } from './../services/formation.service';
import { Component, OnInit } from '@angular/core';
import Formation from '../models/formation';
import { OverlayPanel } from 'primeng/overlaypanel';


@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
  formations: Formation[];
  public searchText;
  selectedForm: Formation;
  constructor(private fs: FormationService, private router: Router) { }

  ngOnInit() {
    this.fs.refreshNeed.subscribe(() => {
      this.getForamtion();
    });
    this.getForamtion();
  }
  getForamtion() {
    this.fs
    .getBusinesses()
    .subscribe((data: Formation[]) => {
      this.formations = data;
  });
  }

  deleteBusiness(formation) {
    if (confirm('êtes-vous sûr de supprimer cet enregistrement ?')) {
    this.fs.deleteBusiness(formation._id).subscribe(
    data => {
     this.formations.splice(this.formations.indexOf(formation), 1 );
       },
      error => {
          console.log(error);
         }

 ); }
}
selectFormation(event,form: Formation, overlaypanel: OverlayPanel) {
  this.selectedForm = form;
  overlaypanel.toggle(event);
}



}
