import { Component, OnInit } from '@angular/core';
import { StorageService } from '../core/storage.service';

@Component({
  selector: 'app-session-music',
  templateUrl: './session-music.component.html',
  styleUrls: ['./session-music.component.css']
})
export class SessionMusicComponent implements OnInit {
  sessionStorageData: any = [];

  constructor(private sessionStorageService: StorageService) { }

  ngOnInit() {
    this.sessionStorageData = this.sessionStorageService.getFromSessionStorage();
    this.sessionStorageData = JSON.parse(this.sessionStorageData);
  }
}
