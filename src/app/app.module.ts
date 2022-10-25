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
import { LocalStorageService } from './core/local.service';
import { SessionStorageService } from './core/session.service';
import { RouterModule, Routes } from '@angular/router';
import { StorageService } from './core/storage-service';

const appRoutes: Routes = [
  { path: '', component: MusicComponent },
  { path: 'local', component: LocalMusicComponent },
  { path: 'session', component: SessionMusicComponent },
];

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
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: StorageService,
      useClass: LocalStorageService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
