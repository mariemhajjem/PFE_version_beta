import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isAdmin = false ;
LoggedIn = false;
 
constructor(private chat: ChatService,private auth :AuthService){
    
}

sendMessage() {
  this.chat.sendMsg("Test Message");
}
  logout(){
    this.isAdmin= false;
    this.LoggedIn= false;
    this.auth.logout();
  }
  ngOnInit() {
    if(this.auth.isAdmin()){
     this.isAdmin=true;
 
    };

   if(this.auth.isLoggedIn()){
    this.LoggedIn= true;
   }

   this.chat.messages.subscribe(msg => {
    console.log(msg);
  })
  }



}
