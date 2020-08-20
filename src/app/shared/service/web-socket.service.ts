import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  constructor() {
    this.socket = io(this.url);
  }

  socket: any;
  readonly url: string = 'http://localhost:3000';

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }

  listen(eventName: string, cb: any) {
    this.socket.on(eventName, data => {
      cb(data);
    });
  }
}
