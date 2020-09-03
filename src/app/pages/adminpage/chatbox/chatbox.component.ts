import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { WebSocketService } from 'src/app/shared/service/web-socket.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit, AfterViewInit {

  constructor(private websocketService: WebSocketService) { }

  @ViewChild('message', {static: false}) private messageHTML;
  @ViewChild('btnSend', {static: false}) private sendButtonHTML;
  @ViewChild('screen', {static: false}) private screenHTML;
  @ViewChild('handler', {static: false}) private handlerHMTL;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.messageHTML = this.messageHTML.nativeElement;
    this.sendButtonHTML = this.sendButtonHTML.nativeElement;
    this.screenHTML = this.screenHTML.nativeElement;
    this.handlerHMTL = this.handlerHMTL.nativeElement;
    console.log(this.messageHTML, this.sendButtonHTML, this.screenHTML);
    this.webSocket();
  }

  webSocket() {
    this.sendButtonHTML.addEventListener('click', () => {
      console.log(this.messageHTML.value);
      this.websocketService.emit('chat', {
        message: this.messageHTML.value,
        handler: this.handlerHMTL.value
      });
      this.messageHTML.value = '';
    });

    this.websocketService.listen('chat', (data) => {
/*       const newParagraphe = document.createElement('p');
      const newContent = document.createTextNode(data.message);
      newParagraphe.appendChild(newContent);

      const currentDiv = document.getElementById('message');
      document.body.insertBefore(newParagraphe, currentDiv); */

      this.screenHTML.innerHTML += `<p> ${data.handler} : ${data.message} </p>`;
    });
  }

}
