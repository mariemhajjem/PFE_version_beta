import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormationService } from '../../admin/components/services/formation.service';
import { Router, ActivatedRoute } from '@angular/router';
import Formation from '../../admin/components/models/formation';
import { NavbarService } from '../service/navbar.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent implements OnInit  {
 

   formation: Formation;

  constructor(private route: ActivatedRoute, private auth: AuthService,private formationService :FormationService,public nav: NavbarService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.formationService.editBusiness(params.id).subscribe(res => {
        this.formation = res as Formation; 
      });
    });
    if(this.auth.isLoggedIn()){
      this.nav.LoggedIn = true; 
     }
  }

}
