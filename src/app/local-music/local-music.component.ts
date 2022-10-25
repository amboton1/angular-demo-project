import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../core/local.service';
import { StorageService } from '../core/storage-service';

@Component({
  selector: 'app-local-music',
  templateUrl: './local-music.component.html',
  styleUrls: ['./local-music.component.css'],
})
export class LocalMusicComponent implements OnInit {
  localStorageData: any = [];

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.localStorageData = this.localStorageService.getItem('local');
  }

}
