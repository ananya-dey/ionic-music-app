import {Component, ViewChild} from '@angular/core';
import {Nav, Platform, MenuController} from "ionic-angular";
import {HomePage} from "../../pages/home/home";
import {SingersPage} from "../../pages/singers/singers";
import {SongsPage} from "../../pages/songs/songs";
import {StatusBar, Splashscreen} from "ionic-native";

/*
  Generated class for the Question component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'question',
  templateUrl: 'question.html'
})
export class QuestionComponent {

  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{title:string, component:any}>;

  constructor(public platform: Platform, public mctrl:MenuController) {
    this.initApp();
    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'Questions', component: SingersPage},
      {title: 'Users', component: SongsPage}
    ];
  }

  initApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(p){
    this.mctrl.close();
    this.nav.setRoot(p.component);
  }

}
