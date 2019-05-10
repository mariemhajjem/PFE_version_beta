import { MessageService } from './../service/message.service';

import { Component, OnInit } from '@angular/core';
import Message from '../models/message';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  Message: Message = {
    name: '',
    email: '',
    message: ''
  };
  constructor(private MS: MessageService) { }
  AjouterMessage() {
    this.MS.sendMessage(this.Message);
  }

  ngOnInit() {
  }

}
