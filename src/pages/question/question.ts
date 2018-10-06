import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { InGamePage } from './../ingame/ingame';


@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage {
  constructor(public alertCtrl: AlertController, public navCtrl: NavController) { }
    submitAlert() {
    let alert = this.alertCtrl.create({
      title: 'Coming Soon!',
      message: 'This button will send the input to the server, where the results will be calculated',
      buttons: ['Ok']
    });
    alert.present()
  }
    goBack(){
      this.navCtrl.setRoot(InGamePage);
    }

}
