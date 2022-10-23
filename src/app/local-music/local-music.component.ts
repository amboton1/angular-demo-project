import { Component, OnInit } from '@angular/core';
import { StorageService } from '../core/storage.service';

@Component({
  selector: 'app-local-music',
  templateUrl: './local-music.component.html',
  styleUrls: ['./local-music.component.css']
})
export class LocalMusicComponent implements OnInit {
  localStorageData: any = [];

  constructor(private localStorageService: StorageService) { }

  ngOnInit() {
    this.localStorageData = this.localStorageService.getFromLocalStorage();
    this.localStorageData = JSON.parse(this.localStorageData);
  }

}
