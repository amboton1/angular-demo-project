import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/local.service';
import { SessionStorageService } from 'src/app/core/session.service';
import { StorageService } from 'src/app/core/storage-service';
import { Music } from '../music.model';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css'],
  providers: [{
    provide: StorageService,
    useClass: LocalStorageService
  }]
})
export class MusicListComponent implements OnInit {
  musicList: Music[] = [];

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.musicList = this.storageService.getAll();
  }

}
