import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/local.service';
import { SessionStorageService } from 'src/app/core/session.service';
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

  constructor(private localStorageService: LocalStorageService, private sessionStorageService: SessionStorageService) { }

  ngOnInit() {
    this.checkStorage();
  }

  checkStorage() {
    const locals = this.localStorageService.checkStorage();
    if (locals) {
      this.disableButtonOnLoad(locals, 'local');
    }

    const sessions = this.sessionStorageService.checkStorage();
    if (sessions) {
      this.disableButtonOnLoad(sessions, 'session');
    }
  }

  disableButtonOnLoad(storageType: string | null, storageKey: string) {
    if (typeof storageType === 'string') {
      const parsed = JSON.parse(storageType);

      for (let index = 0; index < parsed.length; index++) {
        if (parsed[index].id === this.track.id) {
          if (storageKey === 'local') {
            this.isButtonLocalDisabled = true;
          } else {
            this.isButtonSessionDisabled = true;
          }
        }
      }
    }
  }

  onLocalStorageSave() {
    this.localStorageService.setItem('local', this.track);
    this.isButtonLocalDisabled = true;
  }

  onSessionStorageSave() {
    this.sessionStorageService.setItem('session', this.track);
    this.isButtonSessionDisabled = true;
  }

}
