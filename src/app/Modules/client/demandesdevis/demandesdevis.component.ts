import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-demandesdevis',
  templateUrl: './demandesdevis.component.html',
  styleUrls: ['./demandesdevis.component.css']
})
export class DemandesdevisComponent implements OnInit {

  constructor(public nav : NavbarService) { }

  ngOnInit() {
    this.nav.hide();
  }

}
