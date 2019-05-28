import { element } from 'protractor';
import { Session } from './../models/Session';
import { SessionsService } from './../services/sessions.service';
import { Component, OnInit } from '@angular/core';
import {ChartModule} from 'primeng/chart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Session: any[];
  data: any;
  chartData  = [];
  chart = [];
  chartLen = [];

  constructor(private ss: SessionsService) {}

  ngOnInit() {  this.ss
    .getSessionsname()
    .subscribe((res: any[]) => {
      this.Session = res;
      console.log(this.Session);
      this.Session.forEach(element => {
        this.chartData.push(...Object.values([element.name]));
        this.chart.push(...Object.values([element.quanti]));
        this.chartLen.push(...Object.values([element.NbPlaces]));
        this.data = {
          labels: this.chartData,
          datasets: [
              {
                  label: 'nombres de réservations',
                  backgroundColor: '#42A5F5',
                  borderColor: '#1E88E5',
                  data: this.chart
              },
              {
                label: 'nombres de palces disponibles',
                backgroundColor: '#9CCC65',
                borderColor: '#7CB342',
                data: this.chartLen
            }
          ]
      }
      });
      console.log(this.chartData)
      console.log(this.chart);
  });
  }


}
