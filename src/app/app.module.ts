import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HomePage} from "../pages/home/home";
import {SingersPage} from "../pages/singers/singers";
import {SongsPage} from "../pages/songs/songs";
import {MusicList} from "../providers/music-list";
import {QusDetailPage} from "../pages/qus-detail/qus-detail";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SingersPage,
    SongsPage,
    QusDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SingersPage,
    SongsPage,
    QusDetailPage
  ],
  providers: [MusicList]
})
export class AppModule {}
