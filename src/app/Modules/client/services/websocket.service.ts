import { Injectable } from '@angular/core';
 
import * as io from 'socket.io-client';
import { Observable,Subject } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket;
  url: 'http://localhost:3000';

  constructor() { }

  connect(): Subject<MessageEvent> {
    
    this.socket = io(this.url);

    // We define our observable which will observe any incoming messages
    // from our socket.io server.
    let observable = new Observable(observer => {
        this.socket.on('message', (data) => {
          console.log("Received message from Websocket Server")
          observer.next(data);
        })
        return () => {
          this.socket.disconnect();
        }
    });

    // We define our Observer which will listen to messages
    // from our other components and send messages back to our
    // socket server whenever the `next()` method is called.
    let observer = {
        next: (data: Object) => {
            this.socket.emit('message', JSON.stringify(data));
        },
    };

    // we return our Rx.Subject which is a combination
    // of both an observer and observable.
    return Subject.create(observer, observable);
  }

}
