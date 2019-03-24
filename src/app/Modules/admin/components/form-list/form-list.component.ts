import { Router } from '@angular/router';
import { FormationService } from './../services/formation.service';
import { Component, OnInit } from '@angular/core';
import Formation from '../models/formation';


@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
  formations: Formation[];
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
    this.fs.deleteBusiness(formation._id).subscribe(
    data => {
     this.formations.splice(this.formations.indexOf(formation), 1 );
       },
      error => {
          console.log(error);
         }

 ); }



}
