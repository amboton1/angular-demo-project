import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/storage.service';
import { Music } from '../music.model';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {
  musicList: Music[] = [];

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.musicList = this.storageService.musicList;
  }

}
