import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormationService } from '../../admin/components/services/formation.service';
import { Router, ActivatedRoute } from '@angular/router';
import Formation from '../../admin/components/models/formation';
import { NavbarService } from '../service/navbar.service';
import { AuthService } from '../../auth/auth.service';
import { CartService, BaseCartItem } from 'ng-shopping-cart';
import { CommentaireService } from '../service/commentaire.service';
import  Commentaire   from '../models/commentaire';

import { map} from 'rxjs/operators';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent implements OnInit  {


   formation: Formation;
  idformation:any;
  cmt :Commentaire ={
    Sujet :''
  };
  constructor(private cartService: CartService<BaseCartItem>,private route: ActivatedRoute, private auth: AuthService,private formationService :FormationService,public nav: NavbarService,private cmtService :CommentaireService) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idformation = params.id;
      this.formationService.editBusiness(params.id).subscribe(res => {
        this.formation = res as Formation;
      });
    });
    if(this.auth.isLoggedIn()){

      this.nav.LoggedIn = true; 
     }  
    //const array = [{ id: 123, value: "value1", name:"Name1" }, { id: 124, value: "value2", name: "Name1" }, { id: 125, value: "value3", name: "Name2" }, { id: 126, value: "value4", name: "Name2" }],
    // names = [...new Set(array.map(a => a.name))];
    //  console.log(names);

  }
  AjouterCmt(){
    console.log(this.idformation);
    this.cmtService.sendCmt(this.idformation,this.cmt);
  }

  AjouterAuPanier(id){
  let items: Array<Object>= []; 
    const item = new BaseCartItem();
      item.setId(id);
      item.setPrice(10);
      item.setQuantity(1);
      const form = JSON.stringify(item);

     // items.push(form);
      localStorage.setItem('Cart', JSON.stringify(items));  
     // console.log(form);
    //  const data = JSON.stringify(items);
  // Create item:
      let local =JSON.parse(localStorage.getItem('Cart'));
      items = local['Cart'];  
      items.push(form); 
      local['Cart'] = items; 
      localStorage.setItem('Cart', JSON.stringify(local));  

  }

}
