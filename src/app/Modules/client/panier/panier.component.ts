import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../../admin/components/services/sessions.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
   items;
   order;
  constructor(private Ss:SessionsService) { }

  ngOnInit() {
    this.Ss.GetCart().subscribe(data =>{
      this.items = data;
      console.log(data);
    })  }
    reserver(){
      this.Ss.AddToCart(this.order);
    }
    Remove(id) {
      if (confirm('êtes-vous sûr de supprimer cet enregistrement ?')) {
        this.Ss.Remove(id).subscribe(
        data => {
         this.items.splice(this.items.indexOf(id), 1 );
           },
          error => {
              console.log(error);
             }
     ); }
    }
}
