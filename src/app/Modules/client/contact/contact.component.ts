import { ContactService } from './../service/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  registerContact = {
    name: '',
    email: '',
    message : ''
  }
  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }
  submit() {
    this.contactService.sendMessage(this.registerContact);
  }

}
