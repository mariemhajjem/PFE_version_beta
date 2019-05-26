import { SessionService } from './../../../client/service/session.service';
import { Component, OnInit } from '@angular/core';
import {ChartModule} from 'primeng/chart';
import { SessionsService } from './../services/sessions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;

  constructor(private ss: SessionService) {
      this.data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  label: 'My First dataset',
                  backgroundColor: '#42A5F5',
                  borderColor: '#1E88E5',
                  data: [65, 59, 80, 81, 56, 55, 40]
              }
          ]
      }
  }

  ngOnInit() {
  }

}
