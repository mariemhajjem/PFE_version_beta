import { SessionsService } from './../services/sessions.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from '../models/Session';
import Formation from '../models/formation';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.component.html',
  styleUrls: ['./edit-session.component.css']
})
export class EditSessionComponent implements OnInit {
  sessions: any = {};
  rangeDates: Date[];
  Formations: Formation[];
  selectedLevel;
  formation: Formation;
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
  constructor(private SS: SessionsService,private FormService: FormationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.SS.editSession(params.id).subscribe(res => {
        this.sessions = res;
      });
  });
   this.FormService.getBusinesses().subscribe(data =>{
      this.Formations = data as Formation[];
    })
}

selected(){
  this.id = this.selectedLevel._id;
    console.log(this.selectedLevel._id)
  }
send() {
  this.route.params.subscribe(params => {
     this.SS.updateSession(Session, params.id);
     this.router.navigate(['/admin/listSessions']);
  });
}
}
