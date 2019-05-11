import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';
import { FormationService } from '../../admin/components/services/formation.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {
  sessions: any;

  constructor(private formationService:FormationService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    return this.formationService.getThree().subscribe(data =>
      {
        this.sessions = data; 
      },
      error => {
        console.log(error);
      }
      )
  }
}
