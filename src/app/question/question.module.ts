import {NgModule, ErrorHandler, ModuleWithProviders} from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {HomePage} from "../../pages/home/home";
import {SingersPage} from "../../pages/singers/singers";
import {SongsPage} from "../../pages/songs/songs";
import {QusDetailPage} from "../../pages/qus-detail/qus-detail";
import {MusicList} from "../../providers/music-list";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {QuestionComponent} from "./question";
@NgModule({
  declarations: [
    HomePage,
    SingersPage,
    SongsPage,
    QusDetailPage,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(HomePage),
    IonicModule.forRoot(SingersPage),
    IonicModule.forRoot(SongsPage),
    IonicModule.forRoot(QusDetailPage),
  ],
  entryComponents: [
    HomePage,
    SingersPage,
    SongsPage,
    QusDetailPage,
    QuestionComponent
  ],
  providers: [MusicList]
})
export class QuestionModule {}
