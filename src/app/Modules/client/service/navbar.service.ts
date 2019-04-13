import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  visible: boolean;
  isAdmin : boolean ;
  LoggedIn : boolean;
  constructor() {
     this.visible = false; 
     this.isAdmin= false;
    this.LoggedIn= false;
  }

  hide() { this.visible = false; }

  show() { this.visible = true; }
 
}
