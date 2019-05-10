import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../../admin/components/services/sessions.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
   items;
  constructor(private Ss:SessionsService) { }

  ngOnInit() {
    this.Ss.GetCart().subscribe(data =>{
      this.items = data;
    })  }
    Remove(id){
      this.Ss.Remove(id);
    }
}
