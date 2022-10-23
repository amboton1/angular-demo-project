import { EventEmitter, Injectable } from '@angular/core';
import { Music } from '../music/music.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  track: Music = {id: '', title: '', artist: '', imagePath: ''};
  trackEvent = new EventEmitter<Music>();

  musicList: Music[] = [
    new Music('12134q2212', 'bla bla 1asd', 'ammar', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'),
    new Music('121112212', 'bla bla 1wj', 'ammar', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'),
    new Music('12124553212', 'bla bla 1yuyru', 'ammar', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'),
    new Music('121587562212', 'bla bla 14523445', 'ammar', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'),
    new Music('1216792212', 'bla bla 1gjhkjgkgh', 'ammar', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'),
    new Music('12143422212', 'bla bla 1nvbnv', 'ammar', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'),
    new Music('12122e5612', 'bla bla 1lhklh', 'ammar', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'),
    new Music('121345w2212', 'bla bla 17878', 'ammar', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'),
    new Music('121286i8212', 'bla bla 1999', 'ammar', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')
  ];

  localStorage = new EventEmitter<any>;
  sessionStorage = new EventEmitter<any>;

  localStorageTemp: Record<string, any>[] = [];
  sessionStorageTemp: Record<string, any>[] = [];

  constructor() {}

  getFromLocalStorage = () => localStorage.getItem('local');

  getFromSessionStorage = () => sessionStorage.getItem('session');

  sendIdOnClick(track: Music) {
    this.track = track;
    this.trackEvent.emit(this.track);
    console.log(this.track)
  }

  saveOnLocalStorage(information: Record<string, any>) {
    this.localStorageTemp.push(information);
    localStorage.setItem('local', JSON.stringify(this.localStorageTemp));
  }

  saveOnSessionStorage(information: Record<string, any>) {
    this.sessionStorageTemp.push(information);
    sessionStorage.setItem('session', JSON.stringify(this.sessionStorageTemp));
  }
}
