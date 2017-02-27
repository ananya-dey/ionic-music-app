import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MusicList} from "../../providers/music-list";
import {QusDetailPage} from "../qus-detail/qus-detail";

/*
  Generated class for the Singers page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-singers',
  templateUrl: 'singers.html'
})
export class SingersPage {
  public qus:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public musicList:MusicList) {
    this.AllQuestions();
  }

  AllQuestions(){
    this.musicList.getAllQuestions()
      .subscribe(
        res=>{
          this.qus = res.items;
          console.log(this.qus);
        })
  }

  QusDetails(question_id:string){
    this.navCtrl.push(QusDetailPage, {question_id});
  }

  ionViewDidLoad() {
    console.log('QuiestionsPage');
  }

}
