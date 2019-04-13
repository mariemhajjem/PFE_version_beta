import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-formulaireformation',
  templateUrl: './formulaireformation.component.html',
  styleUrls: ['./formulaireformation.component.css']
})
export class FormulaireformationComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit() {
    this.nav.hide();
  }

}
