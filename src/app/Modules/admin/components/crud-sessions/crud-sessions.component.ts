import { Component, OnInit } from '@angular/core';
import { SessionsService } from 'src/app/Modules/admin/components/services/sessions.service';

@Component({
  selector: 'app-crud-sessions',
  templateUrl: './crud-sessions.component.html',
  styleUrls: ['./crud-sessions.component.css']
})
export class CrudSessionsComponent implements OnInit {

  constructor(private SessionService :SessionsService) { }
  Sessions : any[];
  ngOnInit() {
    this.SessionService.getSessions().subscribe( data =>
    {
      this.Sessions = data as any;
      console.log(data);
    })
  }

  deleteSession (session){
    if (confirm('êtes-vous sûr de supprimer cet enregistrement ?')) {
    this.SessionService.delete(session._id).subscribe(
    data => {
     this.Sessions.splice(this.Sessions.indexOf(session), 1 );
       },
      error => {
          console.log(error);
         }

 ); }
}
}
