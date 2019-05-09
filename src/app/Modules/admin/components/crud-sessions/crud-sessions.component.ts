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
    })
  }
  deleteSession(session){
    this.SessionService.delete(session._id);
  }
}
