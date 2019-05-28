import { PartenaireService } from './../services/partenaire.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Formation from '../models/formation';
import { SessionsService } from '../services/sessions.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Session} from '../models/Session';
import { FormationService } from '../services/formation.service';
import Partenaire from '../models/partenaire';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit {

    Formateur: Partenaire[];
    formation: Formation;
    rangeDates: Date[];
    Formations: Formation[];
    number :Number;
    selectedLevel;
    selectedFor;
    session : Session ={
    name :  "",
    date: "" ,
    Formations: this.formation,
    Formateur : "",
    NbPlaces :  this.number,
    Horaires : "",
    NbHeures : this.number,
    quanti: this.number
     };
  id: any;
  formateur: any;
  constructor(private ss: SessionsService,private PS: PartenaireService, private FormService: FormationService, private router: Router) { }

  ngOnInit() {
    this.FormService.getBusinesses().subscribe(data =>{
      this.Formations = data as Formation[];
    });
    this.PS.getPartenaires().subscribe(data =>{
      this.Formateur = data as Partenaire[];
    });
}
selected(){
this.id = this.selectedLevel._id;
  console.log(this.selectedLevel._id)
}
selectedFormateur(){
  this.formateur = this.selectedFor._id;
    console.log(this.selectedFor._id)
  }


  send() {
    this.ss.sendsession(this.session, this.id, this.formateur);
    this.router.navigate(['/admin/listSessions']);
    }

}
