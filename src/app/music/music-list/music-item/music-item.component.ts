import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/storage.service';
import { Music } from '../../music.model';

@Component({
  selector: 'app-music-item',
  templateUrl: './music-item.component.html',
  styleUrls: ['./music-item.component.css']
})
export class MusicItemComponent implements OnInit {
  @Input() track!: Music;
  isButtonLocalDisabled = false;
  isButtonSessionDisabled = false;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    if (localStorage.getItem('local')) {
      let locals = localStorage.getItem('local');
      this.disableButtonOnLoad(locals, 'local');
    }

    if (sessionStorage.getItem('session')) {
      let sessions = sessionStorage.getItem('session');
      this.disableButtonOnLoad(sessions, 'session');
    }
  }

  disableButtonOnLoad(storageType: string | null, storageKey: string) {
    if (typeof storageType === 'string') {
      const parse = JSON.parse(storageType);
      for (let index = 0; index < parse.length; index++) {
        if (parse[index].id === this.track.id) {
          if (storageKey === 'local') {
            this.isButtonLocalDisabled = true;
          } else {
            this.isButtonSessionDisabled = true;
          }
        }
      }
    }
  }

  onTrackSongClick() {
    this.storageService.sendIdOnClick(this.track);
  }

  onLocalStorageSave() {
    this.storageService.saveOnLocalStorage(this.track);
    this.isButtonLocalDisabled = true;
  }

  onSessionStorageSave() {
    this.storageService.saveOnSessionStorage(this.track);
    this.isButtonSessionDisabled = true;
  }

}
