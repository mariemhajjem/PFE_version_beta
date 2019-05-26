import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Formation from '../models/formation';
import { SessionsService } from '../services/sessions.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Session} from '../models/Session';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit {

    formation: Formation;
    rangeDates: Date[];
    Formations: Formation[];
    number :Number;
    selectedLevel;
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
  constructor(private ss: SessionsService, private FormService: FormationService, private router: Router) { }

  ngOnInit() {
    this.FormService.getBusinesses().subscribe(data =>{
      this.Formations = data as Formation[];
    })

}
selected(){
this.id = this.selectedLevel._id;
  console.log(this.selectedLevel._id)
}


  send() {
    this.ss.sendsession(this.session, this.id);
    this.router.navigate(['/admin/listSessions']);
    }

}
