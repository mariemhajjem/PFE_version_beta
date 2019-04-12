import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subject  } from 'rxjs';
 
import { WebsocketService } from './websocket.service';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket = io('http://localhost:3000');

  messages: Subject<any>;

  // Our constructor calls our wsService connect method
  constructor(private wsService: WebsocketService) {
    this.messages = <Subject<any>>wsService
      .connect().pipe(
       map((response: any): any => {
        return response;
      }))
   }

  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg) {
    this.messages.next(msg);
  }

}
