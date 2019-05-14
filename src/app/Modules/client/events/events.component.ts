import { Component, OnInit } from '@angular/core';
import { EventService } from '../../admin/components/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: any[];

  constructor(private es : EventService) { }

  ngOnInit() {
    this.es.getAll().subscribe(data =>{
      this.events= data as any;
    })
  }

}
