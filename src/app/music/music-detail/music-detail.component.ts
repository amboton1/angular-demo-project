import { Component, Input, OnInit } from '@angular/core';
import { Music } from '../music.model';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.css']
})
export class MusicDetailComponent implements OnInit {
  @Input() songDetail: Music = {id: '', title: '', artist: '', imagePath: ''};

  constructor() { }

  ngOnInit(): void {
  }

}
