import { PartenaireService } from './../components/services/partenaire.service';
import { Component, OnInit } from '@angular/core';
import Partenaire from '../components/models/partenaire';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {
  partenaire: Partenaire = {
    name: '',
    job: '',
  };
  constructor(private Ps: PartenaireService ) { }

  ngOnInit() {
  }
  send(){
    this.Ps.sendDemande(this.partenaire);
  }

}
