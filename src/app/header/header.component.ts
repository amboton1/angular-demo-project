import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() storageLink = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onNavigationClick(storage: string) {
    this.storageLink.emit(storage);
  }

}
