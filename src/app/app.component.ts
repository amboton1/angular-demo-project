import { Component, OnInit } from '@angular/core';
import { StorageService } from './core/storage.service';
import { Music } from './music/music.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  link = '';
  track: Music = {id: '', title: '', artist: '', imagePath: ''};

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.storageService.trackEvent.subscribe((track) => this.track = track);
    console.log(this.track)
  }

  onStorageLinkClick(eventData: string) {
    this.link = eventData;
  }
}
