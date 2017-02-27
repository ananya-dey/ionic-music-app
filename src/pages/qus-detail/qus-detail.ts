import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MusicList} from "../../providers/music-list";

/*
  Generated class for the QusDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-qus-detail',
  templateUrl: 'qus-detail.html'
})
export class QusDetailPage {
  public question_id:string;
  public answer:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ml:MusicList) {
    this.question_id = navParams.get('question_id');
    this.getAnswer();
  }

  getAnswer(){
    this.ml.getQusAns(this.question_id)
      .subscribe(
        res=>{
          this.answer = res.items;
          console.log(this.answer);
        }
      )
  }

  ionViewDidLoad() {
    console.log('Question Detail Page');
  }

}
