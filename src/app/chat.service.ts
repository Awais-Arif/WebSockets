import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket = io('http://localhost:3000');

  joinRoom(data: { user: String; room: String; }) {
    this.socket.emit('join', data);
  }

  newUserJoined() {
    let observable = new Observable<{ user: String, message: String }>((observer: { next: (arg0: any) => void; }) => {
      this.socket.on('new user joined', (data: any) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); }
    });

    return observable;
  }

  leaveRoom(data: { user: String; room: String; }) {
    this.socket.emit('leave', data);
  }

  userLeftRoom() {
    let observable = new Observable<{ user: String, message: String }>((observer: { next: (arg0: any) => void; }) => {
      this.socket.on('left room', (data: any) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); }
    });

    return observable;
  }

  sendMessage(data: { user: String; room: String; message: String; }) {
    this.socket.emit('message', data);
  }

  newMessageReceived() {
    let observable = new Observable<{ user: String, message: String }>((observer: { next: (arg0: any) => void; }) => {
      this.socket.on('new message', (data: any) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); }
    });

    return observable;
  }
}
