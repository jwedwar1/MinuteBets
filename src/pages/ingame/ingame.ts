import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from './../home/home';
import { AccountPage } from './../account/account';


@Component({
  selector: 'page-ingame',
  templateUrl: 'ingame.html'
})
export class InGamePage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) { }


  goBack() {
      this.navCtrl.pop();
    }

  goToHomePage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.setRoot(HomePage);
  }

  doAccountAlert() {
  /*
    let alert = this.alertCtrl.create({
      title: 'Coming Soon!',
      message: 'This button will link to a webpage, such as RebelRewards, where students can redeem their tokens for prizes',
      buttons: ['Ok']
    });
    alert.present()
    */

      this.navCtrl.push(AccountPage);
  }


  betSelected() {
    let alert = this.alertCtrl.create({
      title: 'Coming Soon!',
      message: 'This button will display in-depth information about the previous bet. Current info displayed is: Time Since Bet, Amount Won/Lost, Result',
      buttons: ['Ok']
    });
    alert.present()

  }

}