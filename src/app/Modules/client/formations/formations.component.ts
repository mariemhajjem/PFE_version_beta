import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {
  sessions: any;

  constructor(private sessionService : SessionService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    return this.sessionService.getAll().subscribe(data =>
      {
        this.sessions = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
      )
  }
}
