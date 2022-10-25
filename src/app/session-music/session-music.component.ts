import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '../core/session.service';
import { StorageService } from '../core/storage-service';

@Component({
  selector: 'app-session-music',
  templateUrl: './session-music.component.html',
  styleUrls: ['./session-music.component.css'],
})
export class SessionMusicComponent implements OnInit {
  sessionStorageData: any = [];

  constructor(private sessionStorageService: SessionStorageService) { }

  ngOnInit() {
    this.sessionStorageData = this.sessionStorageService.getItem('session');
  }
}
