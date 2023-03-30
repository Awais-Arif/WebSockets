import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { ChatService } from 'src/app/chat.service';
import { PostsService } from '../posts.service';
const SOCKET_ENDPOINT = 'localhost:3000';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  user: String = '';
  room: String = '';
  messageText: any;
  messageArray: Array<{ user: String, message: String }> = [];
  // constructor(private _chatService: ChatService) {
  //   this._chatService.newUserJoined()
  //     .subscribe((data: { user: String; message: String; }) => this.messageArray.push(data));

  //   this._chatService.userLeftRoom()
  //     .subscribe((data: { user: String; message: String; }) => this.messageArray.push(data));

  //   this._chatService.newMessageReceived()
  //     .subscribe((data: { user: String; message: String; }) => this.messageArray.push(data));
  // }




  socket: any;
  constructor() { }
  ngOnInit() {
    this.setupSocketConnection();
  }
  setupSocketConnection() {
    this.socket = io(SOCKET_ENDPOINT);
    this.socket.on('message-broadcast', (data: string) => {
      if (data) {
        const element = document.createElement('li');
        element.innerHTML = data;
        element.style.background = 'white';
        element.style.padding = '15px 30px';
        element.style.margin = '10px';
        const el = document.getElementById('message-list')?.appendChild(element);

      }
    });
  }

  sendMessage() {
    this.socket.emit('message', this.messageText);
    const element = document.createElement('li');
    element.innerHTML = this.messageText;
    element.style.background = 'white';
    element.style.padding = '15px 30px';
    element.style.margin = '10px';
    element.style.textAlign = 'right';
    const el = document.getElementById('message-list')?.appendChild(element);
    this.messageText = '';
  }

  // join() {
  //   this._chatService.joinRoom({ user: this.user, room: this.room });
  // }

  // leave() {
  //   this._chatService.leaveRoom({ user: this.user, room: this.room });
  // }

  // sendMessage() {
  //   this._chatService.sendMessage({ user: this.user, room: this.room, message: this.messageText });
  // }

}
