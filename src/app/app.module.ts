import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {QuestionModule} from "./question/question.module";

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    QuestionModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: []
})
export class AppModule {}
