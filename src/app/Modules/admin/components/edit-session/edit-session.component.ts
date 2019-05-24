import { Session } from './../models/Session';
import { SessionsService } from './../services/sessions.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Formation from '../models/formation';
import { FormationService } from '../services/formation.service';
import { FormGroup,  FormBuilder, FormControl,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.component.html',
  styleUrls: ['./edit-session.component.css']
})
export class EditSessionComponent implements OnInit {
   form: FormGroup;
   sessions : any = {
    name :  "",
    date:  "",
    NbPlaces :  0,
    Horaires : "",
    NbHeures : 0
  };
  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder , private SS: SessionsService,private FormService: FormationService, private route: ActivatedRoute, private router: Router) {}
    createForm() {
      this.form = this.fb.group({
        name: [null, Validators.required] ,
        date:    [null, Validators.required],
        NbPlaces :    [null, Validators.required],
        Horaires :    [null, Validators.required],
        NbHeures :    [null, Validators.required],
      });
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.SS.editSession(params.id).subscribe(res => {
        this.sessions = res;
      });
  });
    this.createForm();
    this.form.get('name').setValue(this.sessions.name);
    this.form.get('date').setValue(this.sessions.date);
    this.form.get('NbPlaces').setValue(this.sessions.NbPlaces);
    this.form.get('Horaires').setValue(this.sessions.Horaires);
    this.form.get('NbHeures').setValue(this.sessions.NbHeures);
}

submit(name, date, Horaires, NbHeures, NbPlaces) {
  this.route.params.subscribe(params => {
  this.sessions.name = name;
  this.sessions.date = date;
  this.sessions.NbPlaces = NbPlaces;
  this.sessions.Horaires = Horaires;
  this.sessions.NbHeures = NbHeures;
  this.SS.updateSession(params.id, this.sessions);
  this.router.navigate(['/admin/listSessions']);
});
}
}
