import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HomePage} from "../pages/home/home";
import {SingersPage} from "../pages/singers/singers";
import {SongsPage} from "../pages/songs/songs";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SingersPage,
    SongsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SingersPage,
    SongsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
