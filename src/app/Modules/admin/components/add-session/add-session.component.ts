import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Formation from '../models/formation';
import { SessionsService } from '../services/sessions.service';
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
    
    selectedLevel;
     session : Session ={
      name :  "",
      date: "" ,
       Formations: this.formation,
      Formateur : "",
      NbPlaces :  0,
      Horaires : "",
      NbHeures : 0,
     };
  id: any;
  constructor(private ss :SessionsService,private FormService:FormationService) { }

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
    this.ss.sendsession(this.session,this.id);
    }

}
