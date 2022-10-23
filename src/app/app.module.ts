import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import { MusicListComponent } from './music/music-list/music-list.component';
import { MusicItemComponent } from './music/music-list/music-item/music-item.component';
import { MusicDetailComponent } from './music/music-detail/music-detail.component';
import { HeaderComponent } from './header/header.component';
import { HighlightDirective } from './shared/highlight.directive';
import { LocalMusicComponent } from './local-music/local-music.component';
import { SessionMusicComponent } from './session-music/session-music.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    MusicListComponent,
    MusicItemComponent,
    MusicDetailComponent,
    HeaderComponent,
    HighlightDirective,
    LocalMusicComponent,
    SessionMusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
