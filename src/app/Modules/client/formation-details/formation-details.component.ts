import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormationService } from '../../admin/components/services/formation.service';
import { Router, ActivatedRoute } from '@angular/router';
import Formation from '../../admin/components/models/formation';
import { NavbarService } from '../service/navbar.service';
import { AuthService } from '../../auth/auth.service';
import { CartService, BaseCartItem } from 'ng-shopping-cart';
import { CommentaireService } from '../service/commentaire.service';
import  Commentaire   from '../models/commentaire';
 
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
      console.log(items);
      const form = JSON.stringify(item);
      console.log(form);
      items.push(form);
      const data = JSON.stringify(items);
  
      localStorage.setItem('Cart', data);
  
      console.log(item.total()); // Prints 100 
  }

}
