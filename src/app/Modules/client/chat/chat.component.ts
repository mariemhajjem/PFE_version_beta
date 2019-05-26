import { Component, OnInit } from '@angular/core';
import { IMessages } from '../models/messages';

import {client } from '../models/DialogFlowclient'
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  conversation : IMessages[] = [];
  constructor() { }

  ngOnInit() {
  }
  addMessageFromUser(message) {
    this.conversation.push({
      avatar : 'perm_identity',
      from : 'Me',
      content: message.value
    });
 
  client.textRequest(message.value).then((response) =>{
    this.conversation.push({
      avatar : 'android',
      from : 'Bot',
      content: response.result.fulfillment['speech'] || 'J\'ai pas bien compris'
    });
    message.value = ''
  })
 }
}
