import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: any[];
  public searchText;
  selectedForm: any;
  constructor(private es: EventService) { }

  ngOnInit() {
    this.es.refreshNeed.subscribe(() => {
      this.getEvents();
    });
    this.getEvents();
  }
  getEvents() {
    this.es
    .getAll()
    .subscribe((data :any) => {
      this.events = data;
  });
  }

  deleteEvent(event) {
    if (confirm('êtes-vous sûr de supprimer cet enregistrement ?')) {
    this.es.deleteEvent(event._id).subscribe(
    data => {
     this.events.splice(this.events.indexOf(event), 1 );
       },
      error => {
          console.log(error);
         }

 ); }
}
selectEvent(event,form: any, overlaypanel: OverlayPanel) {
  this.selectedForm = form;
  overlaypanel.toggle(event);
}

}
